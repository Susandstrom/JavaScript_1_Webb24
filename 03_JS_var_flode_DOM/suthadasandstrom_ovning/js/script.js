
let bobAge=35;
let robAge=30;
let zobAge=30;

if (bobAge > robAge && bobAge > zobAge)
{
    console.log("Bob är äldst");
}
else if( robAge > bobAge && robAge > zobAge)
{
    console.log("Rob är äldst");
}
else if(zobAge > bobAge && zobAge > robAge)
{
    console.log("Zob är äldst");
}

if(bobAge === robAge && bobAge===zobAge && zobAge===robAge)
{
    console.log("De har alla samma ålder.");
}
else if (bobAge === robAge || bobAge===zobAge|| zobAge===robAge )
{
    console.log("Det är lika mellan vissa personer.");
}
