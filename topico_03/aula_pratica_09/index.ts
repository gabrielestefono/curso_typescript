function advancedGreeting(firstName: string, lastName?: string): string {
    if(lastName !== undefined){
        return `Olá, ${firstName} ${lastName}, tudo bem?`
    }
    return `Olá, ${firstName}, tudo bem?`
}

console.log(advancedGreeting("Gabriel", "Estéfono"))
console.log(advancedGreeting("Kaleidos"))