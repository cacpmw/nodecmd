# NodeJS CMD
This project is a forever going app that gathers utilities from my daily activities. It is meant to run on terminal.

## Setup

1. Clone repository
1. `yarn install`
1. `yarn dev -i=someWord -i=someOtherWord --path '../../uploads/model.csv'`

## Build
When building a folder `dist` will be created in the root of the project.

Run:
`yarn tsc`

Now you can CD to the dist folder and run:

`node .`

Passing args:

`node . -i=someWord -i=someOtherWord --path '../../uploads/myfile.csv'`



## Reading csv
Please place your csv file on the uploads folder.
Then change the includes array to reflect what you are looking for.