//https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/csharp

using System;
using System.Linq;

public static class Kata
{
    public static int GetVowelCount(string str)
    {
        return str.Count(x => "aeiou".Contains(x));
    }
}
