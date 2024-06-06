export default function isUserLoggedIn() {
    // TODO - verificar se o usuário esta logado
    return !!localStorage.getItem("token")
}
