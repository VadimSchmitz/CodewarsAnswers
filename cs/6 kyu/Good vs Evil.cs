//https://www.codewars.com/kata/52761ee4cffbc69732000738/csharp

using System;
using System.Linq;

public class Kata
{
    public static string GoodVsEvil(string good, string evil)
    {
        var goodArmy = new[] { 1, 2, 3, 3, 4, 10 };
        var evilArmy = new[] { 1, 2, 2, 2, 3, 5, 10 };
        var goodArmyPower = good.Split(' ').Select((x, i) => int.Parse(x) * goodArmy[i]).Sum();
        var evilArmyPower = evil.Split(' ').Select((x, i) => int.Parse(x) * evilArmy[i]).Sum();
        return goodArmyPower == evilArmyPower ? "Battle Result: No victor on this battle field" : goodArmyPower > evilArmyPower ? "Battle Result: Good triumphs over Evil" : "Battle Result: Evil eradicates all trace of Good";
    }
}