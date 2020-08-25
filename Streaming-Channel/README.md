# STREAMING CHANNEL with Google Auth and OBS

## 1
![alt text](https://github.com/taroserigano/Moden-React-with-Redux/blob/master/Pictures/stream1.png)

## 2
![alt text](https://github.com/taroserigano/Moden-React-with-Redux/blob/master/Pictures/stream2.png)

## 3
![alt text](https://github.com/taroserigano/Moden-React-with-Redux/blob/master/Pictures/stream3.png)

# React app with redux, hooks, Google Auth, OBS Streaming
From coding along with Stephen Grider in his Udemy course https://www.udemy.com/react-redux (and code here https://github.com/StephenGrider/redux-code)
- if you are new or kind of new to React I highly recommend it, at least read the description to see what's in it, I did learn some stuff 
- and it was really nice to code along and have the structure and requirements as I built my app with the new (new in 2019) hooks system and only functional components, where Stephen builds the app with class components. I could fokus on what it should look like and how it should function and not be destracted by designing and feature creeping =) 


## Setup: client
```
cd client
yarn
yarn start
```

## Setup: api
The API server is going to be powered simply by `json-server`
```
cd api
yarn
yarn start
```

## Setup: RTMP
RTMP (Real-Time Messaging Protocol) will be used to both receive and serve video streams. This server will be created by `node-media-server`
```
cd rtmp
yarn
yarn start
```

## Creating a video stream
- Download OBS (Open Broadcaster Software) from https://obsproject.com
- On the bottom left, under Scenes, press the "+" button, and add a new scene
- To the right, under Sources, press the "+" button and choose Capture Display Capture, then add it
- Click the same "+" button again to add an Audio Input Capture
- Go to Preferences -> Stream, then:
  - Set Stream Type to Custom Streaming Server
  - Set URL to rtmp://localhost/live
  - Set Stream key to the id you'd like to broadcast on, e.g. 1. This will then be accessible in the client app in the path '/streams/1'

## the App consists of
streams\api - where we fetch and save data (very simple)

streams\client - the UI where we can create and view streams
(note: the Google authorization only handles access to Create, Edit and Delete - without the authorization you can still run the client and watch a stream)

streams\rtmpserver - hosting the stream from OBS Studio

## and is dependent on (besides the node modules)
OBS Studio - open source for video streaming and recording

Google APIs - only for signin with 'gapi.auth2'


## To enable the client with Google login
Create a new project at console.developers.google.com or use an existing one if you have
Set your client id at property "clientId" (found at the beginning of the GoogleAuth component ~row 37)

I use Yarn package manager but npm would work also.

Run 'yarn install' to fetch node modules
Then 'yarn start' to run the project

*Use Chrome and the add on "redux dev tools" to debug the redux state*

## To enable the api (saving and fetching data)
Start the api server (json-server) in a console 
: streams\api> yarn start
(there are some streams in the "database" already, you can remove them by editing the file api\db.json )

## To enable streaming
Start the rtmp server (node-media-server) in a console 
: streams\rtmpserver> yarn start

If not installed, Install OBS Studio - https://obsproject.com/
Create a streaming scene
- then a Source for display
- and audio if you want

Change settings for stream - File/Settings/Stream
- URL = rtmp://localhost/live
- Stream key = 1
-- note, the stream key must match the id of the stream in the client,
example: http://localhost:3000/streams/1
would match on stream key 1


Start streaming (note, you must have started the media server)
