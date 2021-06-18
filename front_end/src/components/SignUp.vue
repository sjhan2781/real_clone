<template>
    <div class="container">
        <form>
            <input type="email" name="email" id="input-email" placeholder="이메일" maxlength="50">
            <p class="error_msg" id="error_email">틀림</p>
            <input type="text" name="username" id="input-username" placeholder="성명" maxlength="30">
            <input type="tel" name="phone" id="input-phone" placeholder="휴대폰 번호" maxlength="11">
            <p class="error_msg" id="error_phone">틀림</p>
            <input type="password" name="password" id="input-password" placeholder="비밀번호">
            <p class="error_msg" id="error_password">틀림</p>
            <input type="password" name="password-check" id="input-password-check" placeholder="비밀번호 확인">
            <p class="error_msg" id="error_password_check">틀림</p>
        </form>
        <button id="signup-btn" value="회원가입"/>
    </div>
</template>

<script>
export default {
    methods : {
        signin(){
            this.$router.push('/login');
        }
    }
}
</script>