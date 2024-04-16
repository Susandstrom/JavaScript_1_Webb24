let bobAge = 30;
let robAge = 25;
let zobAge = 35;

if (bobAge > robAge && bobAge > zobAge) {
    console.log('Bob är äldst')
} else if (robAge > bobAge && robAge > zobAge) {
    console.log('Rob är äldst')
} else if (zobAge > bobAge && zobAge > robAge) {
    console.log('Zob är äldst')
} 
    if (bobAge === robAge && bobAge === zobAge) {
        console.log('De har samma ålder')
}
if (bobAge === robAge) { 
    console.log('Bob och Rob har samma ålder')
    } else if (bobAge === zobAge) {
        console.log('Bob och Zob har samma ålder')
    } else if (robAge === zobAge) {
        console.log('Rob och Zob har samma ålder')
    } else {
        console.log('Bob, Rob, och Zob har olika ålders')
}


