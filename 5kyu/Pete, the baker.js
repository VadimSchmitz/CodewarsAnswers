https://www.codewars.com/kata/525c65e51bf619685c000059/javascript

const cakes = (needs, has) =>
  Math.min(
    ...Object.keys(needs).map((key) => Math.floor(has[key] / needs[key] || 0))
  );
