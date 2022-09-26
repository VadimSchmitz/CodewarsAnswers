class Lasagna
{
    // TODO: define the 'ExpectedMinutesInOven()' method
    int cookingTime = 40;

    public int ExpectedMinutesInOven()
    {
        return cookingTime;
    }
    // TODO: define the 'RemainingMinutesInOven()' method
    public int RemainingMinutesInOven(int actualMinutesInOven)
    {
        return cookingTime - actualMinutesInOven;
    }

    // TODO: define the 'PreparationTimeInMinutes()' method
    public int PreparationTimeInMinutes(int layers)
    {
        return layers * 2;
    }

    // TODO: define the 'ElapsedTimeInMinutes()' method
    public int ElapsedTimeInMinutes(int layers, int actualMinutesInOven)
    {
        return PreparationTimeInMinutes(layers) + actualMinutesInOven;
    }
}
