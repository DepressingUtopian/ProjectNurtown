import React from "react";

import TextHeader from "../TextHeader";
import Post from "./Post";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Checkbox from "../Checkbox";
import ImageButton from "../ImageButton";
import Image from '../Image';

import ArrowRightWhite from '../../resource/img/arrow-right_white.svg';
import ContactUsIMG1 from '../../resource/img/post/our-projects/contact_us.png';

import './ContactUs.scss';

export type ContactUsInputs = {
  name: string;
  phoneNumber: string;
  email: string;
  service: string;
  message: string;
  isChecked: boolean;
};

const EMAIL_PATTERN = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;



const ContactUsForm = () => {
  const { register, control, handleSubmit, formState: { errors } } = useForm<ContactUsInputs>();
  const onSubmit: SubmitHandler<ContactUsInputs> = data => console.log(data);

  return (
    <div className="contact-us-content">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type='text' placeholder='Имя' {...register("name", { minLength: 2, maxLength: 40 })} />

        <input type='text' placeholder='Номер телефона' {...register("phoneNumber", { required: true, valueAsNumber: true })} />
        {errors.phoneNumber && <span className="error-text">Это поле обязательно к заполнению</span>}

        <input type='text' placeholder='E-mail' {...register("email", { required: true, pattern: EMAIL_PATTERN })} />
        {errors.email && <span className="error-text">Это поле обязательно к заполнению</span>}

        <input type='text' placeholder='Интересующий товар/услуга' {...register("service")} />

        <input type='text' className="input-message" placeholder='Сообщение' {...register("message", { required: true, minLength: 10 })} />
        {errors.message && <span className="error-text">Это поле обязательно к заполнению</span>}

        <Controller
          name="isChecked"
          control={control}
          defaultValue={false}
          rules={{ required: true }}
          render={({ field, fieldState: { error } }) => <Checkbox error={error} onChange={(event) => field.onChange(event.target.checked)} checked={field.value} text="Отправляя заявку Вы соглашаетесь с политикой конфиденциальности" />}
        />

        <ImageButton type="submit" className="button-open-post" icon={ArrowRightWhite} buttonText='ОТПРАВИТЬ' isBlack />
      </form>
      <Image link={ContactUsIMG1} />
    </div>
  );
}

const ContactUs = () => (
  <Post className="contact-us">
    <TextHeader text='Связаться с нами' />
    <ContactUsForm />
  </Post>
);

export default ContactUs;