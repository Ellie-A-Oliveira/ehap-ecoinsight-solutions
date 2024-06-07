"use client"

import { useContext, useState } from "react";
import { Button, FormInput } from "../components";
import { useRouter } from "next/navigation";
import { UserContext } from "../contexts/UserContext";
import { log } from "console";

export default function Login() {
    const [mode, setMode] = useState<"login" | "register">("login");
    const context = useContext(UserContext);
    const router = useRouter();

    const [nomeUsuario, setNomeUsuario] = useState<string>("");
    const [nome, setNome] = useState<string>("");
    const [senha, setSenha] = useState<string>("");
    const [mensagem, setMensagem] = useState<string>("");

    const handleLogin = async () => {
        try {
            const response = await fetch("http://localhost:8085/usuario/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    usuario: nomeUsuario,
                    senha
                })

            });
            
            if (response.status === 200) {
                setMensagem('Login realizado com sucesso!');
                context.setUserToken("token");
                router.push("/dashboard");
            }if (response.status === 401) {
                setMensagem('Usuário ou senha inválidos.');
            }

        }catch (error) {
            setMensagem('Usuário ou senha inválidos.');
            console.error('Erro ao tentar fazer login:', error);
        }
    }
    //TODO - implementar login


    const handleRegister = async () => {
        try {
            const response = await fetch("http://localhost:8085/usuario/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nomeUsuario,
                    nome,
                    senha,
                }),
            })
            if (response.status === 201) {
                setMensagem('Cadastro realizado com sucesso!');
                context.setUserToken("token");
                router.push("/dashboard");
            }if (response.status === 400) {
                setMensagem('Cadastro inválido. Tente novamente.');
            }
        } catch (error) {
            console.error("Erro ao tentar registrar:", error);
        }
    };

    const toggleMode = () => {
            setMode(mode === "login" ? "register" : "login");
        };

        const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            if (mode === "login") {
                console.log("Login");
                // TODO - implementar login
                handleLogin();
            } else {
                handleRegister();
                console.log("Register");
                
            }
        };

        return (
            <main className="lg:mx-16 xl:mx-48 h-screen flex items-center justify-center">
                <article className="w-96">
                    <header>
                        <h2 className="text-5xl font-bold tracking-tight text-center text-white mb-4">
                            {mode === "login" ? "Fazer Login" : "Cadastrar"}
                        </h2>
                    </header>
                    <section>
                        <div>
                            <form onSubmit={submitForm}>
                                <div>
                                    {
                                        mode === "register" &&
                                        <div className="mb-4">
                                            <FormInput name="name" label="Nome Completo" type="name" placeholder="Insira seu nome" required={true} onInput={(event) => setNome(event.target.value)} />
                                        </div>
                                    }
                                    <div className="mb-4">
                                        <FormInput name="username" label="Usuário" type="username" placeholder="Insira seu usuário" required={true} onInput={(event) => setNomeUsuario(event.target.value)} />
                                        
                                            
                                    </div>
                                    <div className="mb-4">
                                        <FormInput name="password" label="Senha" type="password" placeholder="Insira sua senha" required={true} onInput={(event) => setSenha(event.target.value)} />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 w-full mt-8 items-center justify-center">
                                    <p className="text-white">{mensagem}</p>
                                    <Button
                                        className="w-9/12"
                                        type="submit"
                                        variant="primary"
                                    >
                                        {mode === "login" ? "Entrar" : "Cadastrar"}
                                    </Button>
                                </div>
                            </form>
                            <div className="flex flex-col gap-4 w-full mt-4 items-center justify-center">
                                <Button
                                    onClick={toggleMode}
                                    className="w-9/12"
                                    type="button"
                                    variant={mode === "register" ? "secondary" : "success"}
                                >
                                    {mode === "register" ? "Voltar para o Login" : "Criar uma conta"}
                                </Button>
                            </div>
                        </div>
                    </section>
                </article>
            </main>
        )
    
    }