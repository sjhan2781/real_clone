
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

import json

from account.serializers import AccountSerializer
from account.models import Account

# Create your views here.
class HomeView(APIView):
    def get(self, request):
        try :
            data = {}
            my_status = None

            user_id = request.session.get('user')
            # user_id = 2
            if user_id:
                myuser_info = Account.objects.get(pk=user_id)
                serializer = AccountSerializer(myuser_info)
                
                data = {
                    'user': serializer.data
                }
                my_status = status.HTTP_200_OK
                # return render(request, 'main/home.html', context)
            
            else :
                my_status = status.HTTP_203_NON_AUTHORITATIVE_INFORMATION

        except Account.DoesNotExist:
            my_status = status.HTTP_203_NON_AUTHORITATIVE_INFORMATION
            #  return Response()

        return Response(data=data, status=my_status)
    
    def post(self, request):
        data = {'data': "good"}
        my_status = status.HTTP_200_OK

        return Response(data=data, status=my_status)


class FeedView(APIView):
    def get(self, request, **kwargs):
        # user_id = kwargs['account_id']
        
        data = [{
            'author': "한상진2",
            'caption': "asdasdas",
            'comments':[
                { 
                    'author': "vvvvv",
                    'content': "asdasd"
                },
                {
                    'author': "abc",
                     'content': "asdasd"
                }
            ],
        }]
        return Response(data=data, status=status.HTTP_200_OK)




# class IndexView(TemplateView):
#     template_name = 'index.html'