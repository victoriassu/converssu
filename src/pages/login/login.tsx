import styled from "@emotion/styled";

function Login() {
  return (
    <Box>
      <Wrapper>
        <Title>로그인</Title>
        <InputEmail placeholder="이메일"></InputEmail>
        <InputPWD placeholder="패스워드" type="password"></InputPWD>
        <Option>
          <OptLabel>
            <CheckOpt type="checkbox" />
            로그인 상태 유지
          </OptLabel>
          <FindDiv>
            <FindIdPwd>아이디</FindIdPwd>/<FindIdPwd>비밀번호찾기</FindIdPwd>
          </FindDiv>
        </Option>
        <LoginBtn>로그인</LoginBtn>
      </Wrapper>
    </Box>
  );
}
const LoginBtn = styled.button`
  display: block;
  width: 100%;
  height: 50px;
  margin: 60px 0 10px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  line-height: 50px;
  text-align: center;
  box-sizing: border-box;
  text-decoration: none;
  background: #000;
  border: 1px solid #000;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: #fff;
    color: black;
  }
`;
const FindDiv = styled.div``;
const FindIdPwd = styled.a`
  font-size: 14px;
  color: #000;
  line-height: 1;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`;
const OptLabel = styled.label`
  color: gray;
  font-size: 12px;
`;
const CheckOpt = styled.input`
  border: 1px solid #e5e5e5;
  accent-color: white;
  &:checked {
    outline: 1px solid black;
  }
`;
const Option = styled.div`
  padding-top: 10px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;
const InputPWD = styled.input`
  display: inline-block;
  width: 100%;
  height: 50px;
  margin: 0 0 10px 0;
  padding: 0 20px;
  border: 1px solid #e5e5e5;
  border-radius: 0;
  font-size: 14px;
  color: #000;
  box-sizing: border-box;
  &::placeholder {
    color: #e5e5e5;
  }
  &:focus {
    outline: 1px solid black;
  }
`;
const InputEmail = styled.input`
  display: inline-block;
  width: 100%;
  height: 50px;
  margin: 0 0 10px 0;
  padding: 0 20px;
  border: 1px solid #e5e5e5;
  border-radius: 0;
  font-size: 14px;
  color: #000;
  box-sizing: border-box;
  &::placeholder {
    color: #e5e5e5;
  }
  &:focus {
    outline: 1px solid black;
  }
`;
const Title = styled.div`
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  line-height: 1;
  color: #000;
  margin-bottom: 40px;
`;
const Wrapper = styled.div`
  height: 500px;
`;
const Box = styled.div`
  box-sizing: border-box;
  margin: 80px auto;
  border: 1px solid #e5e5e5;
  padding: 60px 40px;
  max-width: 540px;
`;

export default Login;
