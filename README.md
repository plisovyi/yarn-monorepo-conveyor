# yarn-monorepo-conveyor

Example of Conveyor integration in yarn monorepo package.

To reproduce latest state: 
1. Clone this repository
2. Run `yarn install`
3. cd to `packages/package-a` and run `conveyor make app`

That would result during `npm i` failing because package-a is not published to npm registry.
