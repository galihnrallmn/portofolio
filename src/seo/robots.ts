export interface RobotsOptions {
  index?: boolean;
  follow?: boolean;
}

export function createRobots(options: RobotsOptions = {}) {
  const index = options.index ?? true;
  const follow = options.follow ?? true;

  return `${index ? "index" : "noindex"}, ${follow ? "follow" : "nofollow"}`;
}
