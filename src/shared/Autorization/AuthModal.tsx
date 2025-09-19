"use client"
import { useState } from 'react';
import styles from './Authoriz.module.scss'
import { AuthModalProps} from '@/types/Auth/Auth';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { authSchema } from './validation';
import { loginUser } from './AuthService';
import toast from 'react-hot-toast';

type AuthFormData = {
  email: string;
  password: string;
};

export default function AuthModal({ onClose }: AuthModalProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

   const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AuthFormData>({
    resolver: zodResolver(authSchema),
  });
  const onSubmit = async (data: AuthFormData) => {
  try {
    const res = await loginUser(data.email, data.password);
    console.log("LOGIN SUCCESS:", res);
    toast.success('Вы успешно вошли!');
    reset();
  } catch (err: unknown) {
    console.log("LOGIN ERROR:", err);

    let errorMessage = 'Ошибка авторизации';

    if (typeof err === 'object' && err !== null) {
      const apiError = err as { response?: { data?: { message?: string } }; message?: string };
      errorMessage = apiError.response?.data?.message || apiError.message || errorMessage;
    } else if (typeof err === 'string') {
      errorMessage = err;
    }

    toast.error(errorMessage);
  }
};

  return (
    <>
    <div className={styles.overlay}>
      <div className={styles.modal}>
         <div className={styles.btn}>
          <button className={styles.closeBtn} onClick={onClose}>✕</button>
        </div>
        <h2 className={styles.h2}>Authorization</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className={styles.eText}>E-mail*</p>
        <label >
          <input id='1' type="email" placeholder="ivan@mail.com" className={styles.email}
          {...register('email')}
        />
        {errors.email?.message && (<p style={{ color: 'red' }}>{errors.email.message}</p>)}
        </label>
        <div className={styles.passwordWrapper}>
           <p className={styles.eText}>Password*</p>
           <label>
             <input id='2' className={styles.email}
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            {...register('password')}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
           </label>
         <span className={styles.eye} onClick={() => setShowPassword(prev => !prev)}>
           <img src={showPassword ? '/assets/18372143.png' : "/assets/Component 102.svg"}  alt='Toggle visibility'      
             className={styles.co}
             />
         </span>
        </div>
        <div className={styles.options}>
          <label>
            <input id='3' name='checkbox' type="checkbox" checked={rememberMe}onChange={() => setRememberMe(prev => !prev)}
            className={styles.box}/>Remember me
          </label>
          <a href="#" className={styles.fp}>Forgot password?</a>
        </div>
        <button className={styles.loginBtn} type="submit" >Log In</button>
        </form>
        <div className={styles.signup}>
          No account yet? <a href="#"className={styles.su}>Sign Up</a>
        </div>
      </div>
    </div>
    </>
  );
}
