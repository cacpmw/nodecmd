# NodeJS CMD
This is meant to automate daily chores via CMD using nodejs.

## Current Features:

1. Extract lines from a .csv file and dump to a new .csv file.

## Setup

1. Clone repository
1. `yarn install`
1. `yarn dev -i=someWord -i=someOtherWord --file 'myfile.csv'`

## Build
Upon build, a folder `dist` will be created in the root of the project.

Run:
`yarn tsc`

Now you can CD to the dist folder and run:

`node .`

Passing args:

`node . -i=someWord -i=someOtherWord --file 'myfile.csv'`



## Reading csv
Please place your csv file on the uploads folder.
