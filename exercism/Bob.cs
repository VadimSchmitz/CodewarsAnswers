using System;
using System.Linq;

public static class Bob
{
    public static string Response(string statement)
    {
        if (statement.EndsWith("?") && !statement.Any(char.IsLower) && statement.Any(x => char.IsLetter(x))) return "Calm down, I know what I'm doing!";
        if (statement.Trim().EndsWith("?")) return "Sure.";
        if (!statement.Any(char.IsLower) && statement.Any(x => char.IsLetter(x))) return "Whoa, chill out!";
        if (statement.Trim() == "") return "Fine. Be that way!";
        return "Whatever.";
    }
}