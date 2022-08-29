//https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript

function friend(friends) {
  return friends.filter((friend) => friend.length === 4);
}

//friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
