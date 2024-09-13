function showUserRoles(role) {
    if (typeof role === 'boolean') {
        return "Usuário não aprovado!";
    }
    return "A fun\u00E7\u00E3o do usu\u00E1rio \u00E9 ".concat(role);
}
console.log(showUserRoles(false));
console.log(showUserRoles("Admin"));
