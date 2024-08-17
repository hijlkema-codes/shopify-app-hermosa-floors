export const addPercentageCeiled = (value, percentage) =>
  Math.ceil(value * (1 + percentage / 100));

export const divideCeiled = (value, divisor) => Math.ceil(value / divisor);
