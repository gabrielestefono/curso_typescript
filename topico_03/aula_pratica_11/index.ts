function showUserRoles(role: boolean | string) {
    if (typeof role === 'boolean') {
        return "Usuário não aprovado!";
    }

    return `A função do usuário é ${role}`;
}

console.log(showUserRoles(false));
console.log(showUserRoles("Admin"));