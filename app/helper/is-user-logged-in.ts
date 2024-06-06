export default function isUserLoggedIn() {
    return true // TODO - verificar se o usuário esta logado
    return !!localStorage.getItem("token")
}
