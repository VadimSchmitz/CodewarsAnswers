using System;
class RemoteControlCar
{
    public int batteryPercentage = 100;
    public int distanceTraveled = 0;

    public static RemoteControlCar Buy() => new();

    public string DistanceDisplay()
    {
        return $"Driven {distanceTraveled} meters";
    }

    public string BatteryDisplay()
    {
        if (batteryPercentage == 0) return "Battery empty";
        return $"Battery at {batteryPercentage}%";
    }

    public void Drive()
    {
        if (batteryPercentage == 0) return;
        batteryPercentage -= 1;
        distanceTraveled += 20;
    }
}