import { Axios } from 'axios';
axios.get('https://dummyjson.com/users/1').then((res) => {
  return res.json();
});
console.log(res);
export const Login = () => {
  return (
    <form>
      <label htmlFor='firstName'>
        First Name
        <input type='text' name='firstName' id='' />
      </label>
      <label htmlFor='email'>
        E-Mail
        <input type='text' name='email' id='' />
      </label>
      <label htmlFor='password'>
        Password
        <input type='text' name='password' id='' />
      </label>
    </form>
  );
};
