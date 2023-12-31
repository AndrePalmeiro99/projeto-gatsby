import * as React from "react"
import { useForm } from "react-hook-form";
import Layout from "../components/layout"

const PiadaForm = () => {

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
      body: encode({ "form-name": "Piadas", ...dados })
    }).then(() => {
      alert("Em breve sua piada estará na página. Obrigado por compartilhar!");
      reset();
    }).catch(error => alert(error));
  };

  return (
    <Layout>
      <h2 className="cabeca">Conte-nos sua melhor piada!</h2>
      <div className="container">
        <form name="Piadas" method="post" onSubmit={handleSubmit(onSubmit)}
          data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="Piadas" />
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
            Título da piada:
            <input type="text" name="titulo" {...register("assunto", { required: true, maxLength: 100 })} />
          </label>
          <label>
            Piada(ou link da piada,caso seja uma imagem):
            <textarea name="piada" rows="5" {...register("mensagem", {required: true, maxLength: 200})} />
            {errors.mensagem && errors.mensagem.type === "required" && (
              <span className="erro">&nbsp;Por favor,adicione uma piada.</span>
            )}
            {errors.mensagem && errors.mensagem.type === "maxLength" && (
              <span className="erro">&nbsp;Piada pode ter 200 caracteres no máximo.</span>
            )}
          </label>
          <input type="submit" value="Enviar" />
          <input type="reset" value="Limpar" />
        </form>
      </div>
    </Layout>
  )
}

export default PiadaForm

export const Head = () => <title>Envio de piadas</title>
