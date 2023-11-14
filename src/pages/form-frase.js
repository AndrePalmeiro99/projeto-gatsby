import * as React from "react"
import { useForm } from "react-hook-form";
import Layout from "../components/layout"

const FraseForm = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const onSubmit = dados => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "Frases", ...dados })
    }).then(() => {
      alert("Em breve sua frase estará na página. Obrigado por compartilhar!");
      reset();
    }).catch(error => alert(error));
  };

  return (
    <Layout>
      <h2 className="cabeca">Mande sua frase mais inspiradora!</h2>
      <div className="formulario">
        <form name="Frases" method="post" onSubmit={handleSubmit(onSubmit)}
          data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="Frases" />
          <label>
            Nome
            <input type="text" name="nome" {...register("nome", { required: true, maxLength: 20 })} />
            {errors.nome && errors.nome.type === "required" && (
              <span className="erro">&nbsp;Nome é obrigatório.</span>
            )}
            {errors.nome && errors.nome.type === "maxLength" && (
              <span className="erro">&nbsp;Nome pode ter 20 caracteres no máximo.</span>
            )}
          </label>
          <label>
            Email
            <input type="email" name="email" {...register("email", {
              required: true,
              pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            })} />
            {errors.email && errors.email.type === "required" && (
              <span className="erro">&nbsp;Email é obrigatório.</span>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <span className="erro">&nbsp;Email inválido.</span>
            )}
          </label>
          <label>
            Mensagem(ou link,caso seja uma imagem)
            <textarea name="mensagem" rows="5" {...register("mensagem", { required: true })} />
            {errors.mensagem && errors.mensagem.type === "required" && (
              <span className="erro">&nbsp;por favor,nos diga uma frase motivacional.</span>
            )}
          </label>
          <input type="submit" value="Enviar" />
          <input type="reset" value="Limpar" />
        </form>
      </div>
    </Layout>
  )
}

export default FraseForm

export const Head = () => <title>Envio de frase motivacional</title>
