import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export interface IUser {
  id?: number | string;
  name?: string;
  email: string;
  password: string;
}

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IUser>();
  const navigate = useNavigate();

  const onSubmit = async (registerData: IUser) => {
    try {
      await axios.post('http://localhost:3000/register', registerData);
      alert('Đăng ký thành công');
      navigate('/login');
    } catch (error) {
      alert('Lỗi đăng ký');
    }
  };

  return (
    <>
      <h1>Đăng ký tài khoản</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input type="text" placeholder="Họ tên" {...register('name')} />
        </div>
        <div>
          <input
            type="text"
            placeholder="Email"
            {...register('email', {
              required: 'Email là bắt buộc',
              pattern: {
                value: /^\S+@(\S+\.)+\S{2,6}$/,
                message: 'Sai định dạng email'
              }
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div>
          <input
            type="password"
            placeholder="Mật khẩu"
            {...register('password', {
              required: 'Mật khẩu là bắt buộc',
              minLength: {
                value: 6,
                message: 'Mật khẩu lớn hơn 6 kí tự'
              }
            })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <button type="submit">Thêm mới</button>
      </form>
    </>
  );
};

export default Register;
