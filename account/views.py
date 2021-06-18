from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.hashers import make_password, check_password #비밀번호 암호화 / 패스워드 체크(db에있는거와 일치성확인)

import json

from django.db import IntegrityError

from .serializers import AccountSerializer
from .models import Account


# Create your views here.
class SignInView(APIView):
    def get(self, request):
        return Response(data={"data": "nono"}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

    def post(self, request):
        # 첫번째 인자로 request 를 받아야 한다.
        email = request.data.get('email', None)
        password = request.data.get('password',None)
        
        # print(email + " " + password)

        data = {"email": email, "password": password}
        myStatus = status.HTTP_200_OK
        # if not (email and password):
        #     data['error_message'] = '아이디와 비밀번호를 모두 입력해주세요.'
        #     myStatus = status.HTTP_417_EXPECTATION_FAILED
        
        # else:
        #     try:
        #         user = Account.objects.get(email = email)

        #         if check_password(password, user.password):
        #             myStatus = status.HTTP_200_OK
        #             data['user'] = user.username

        #         else:
        #             data['error_message'] = "비밀번호가 틀립니다."
        #             myStatus = status.HTTP_417_EXPECTATION_FAILED
            
        #     except Account.DoesNotExist:
        #         myStatus = status.HTTP_417_EXPECTATION_FAILED
        #         data['error_message'] = "아이디가 존재하지 않음."

        return Response(data = data, status = myStatus)

class SignUpView(APIView):
    def post(self, request):
        try:
            email = request.POST['email']
            username = request.POST['username']
            phone = request.POST['phone']
            password = request.POST['password']
            
            data = {}
            account = Account(email=email, username=username, phone=phone, password=make_password(password))
            account.save()
            

            myStatus = status.HTTP_200_OK

        # 유니크 키에 같은 값이 들어올 때
        except IntegrityError as e:
            myStatus = status.HTTP_417_EXPECTATION_FAILED
     
        return Response(data = data, status = myStatus)

class LogoutView(APIView):
    def get(self, request):
        data = {}
        myStatus = status.HTTP_200_OK
        request.session.pop('user')
        return Response(data = data, status = myStatus)