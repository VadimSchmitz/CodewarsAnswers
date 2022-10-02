//https://www.codewars.com/kata/55cbd4ba903825f7970000f5/csharp

using System;

public class Kata
{
    public static char GetGrade(int s1, int s2, int s3)
    {
        var score = (s1 + s2 + s3) / 3;
        if (score >= 90 && score <= 100) return 'A';
        if (score >= 80 && score <= 90) return 'B';
        if (score >= 70 && score <= 80) return 'C';
        if (score >= 60 && score <= 70) return 'D';
        return 'F';
    }
}