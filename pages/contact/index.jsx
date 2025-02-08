import React, { useRef, useState } from 'react';
import { BsArrowRight } from "react-icons/bs";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [msgSend, setMsgSend] = useState("");

    const msgGet = (e) => {
      setMsgSend(e.target.value);
    }
    
    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log(form.current.value);

        emailjs.sendForm("service_23378dm", "template_vl5wv1k", form.current, "nVpQgSHYfkJdGbdmv")
            .then((result) => {
                console.log(result.text);
                setIsLoading(false);
                alert("ありがとうございます。できるだけ早くご連絡いたします。")
            }, (error) => {
                console.log(error.text);
                setIsLoading(false);
                alert("メッセージの送信中にエラーが発生しました。もう一度お試しください。")
            });
        };
return (

  <form ref={form} onSubmit={sendEmail} className="flex-1 flex flex-col gap-6 w-[50%] mt-[200px] mx-auto">
    <input name='user_email' className='input' type="email" placeholder='Email' required />
    <textarea name='user_message' className='input pt-[12px]' placeholder='Write message...' onChange={(e) => msgGet(e)} required ></textarea>
    <button
      type="submit"
      className="btn w-[100%] font-sans rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group mx-auto"
      disabled={isLoading}>
      <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">送信する</span>
      <BsArrowRight
        className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
        aria-hidden
      />
    </button>
  </form>

)};

export default Contact;