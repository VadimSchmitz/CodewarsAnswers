//https://www.codewars.com/kata/54edbc7200b811e956000556/train/csharp

using System;
using System.Linq;

public static class Kata
{
    public static int CountSheeps(bool[] sheeps)
    {
        return sheeps.Where(s => s == true).Count();
        //if false dont count
        return sheeps.Count(sheep => sheep);
    }
}