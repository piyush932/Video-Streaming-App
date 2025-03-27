# 🎥 YouTube UI Clone  

## 🚀 Project Overview  
This project is a **fully responsive** YouTube UI clone built using **React.js , Vanilla CSS and Bootstrap**. It replicates the core interface of YouTube, including the homepage, video playback page, sidebar navigation, Channel Page and dynamic search functionality. The goal was to recreate the user experience of YouTube while integrating real-time data fetching using **YouTube Data API**.

## ✨ Features  
### 📌 Homepage (Video Feed)   
- Displays a list of trending videos with thumbnails.   
- Each video includes:     
  -  🎞 **Thumbnail image** 
  -  🏷 **Video title**     
  -  🎤 **Channel name & profile picture**    
  -  👀 **Number of views & posted time**   
  -  Clicking on a video navigates to the **Video Details Page**. 
   
### 🧭 Navigation & Routing  
- **Top Navbar** with:  
  - 🔎 **Search bar** to find videos.  
  - 👤 **User profile icon** for future authentication expansion.  
- **Left Sidebar** with categories like:  
  - 🏠 Home, 🔥 Trending, 🎵 Music, 🎮 Gaming etc.  
- Uses **React Router** for seamless page navigation. 

### 🎬 Video Details Page  
- Displays a **full video player UI**.  
- Below the video:  
  - 🏷 **Title & description** of the video with **Toggle** of show more functionality.  
  - 👍 **Like & Dislike buttons** (Changes dynamically).  
  - 🔔 **Subscribe button** (UI).  
  - 💬 **Comment section** with a list of comments.
  - ### 📌 Sidebar: Related Videos Details Page  
    - Displays a list of **suggested videos** on the right.  
    - Clicking on a video opens the **Video Details Page**.

## 🔥 Unique Features
### 🏆 Channel Page  
- Displays **channel details** including:  
  - 📸 **Channel banner & profile picture**  
  - 📌 **Channel name, subscriber count, and description**  
- Lists **all videos uploaded by the channel**.  
- Implements **infinite scrolling** for seamless browsing.  
- Uses a **custom hook** for efficient and dynamic data fetching. 

### Shimmer UI 
- Enhances user experience with a smooth loading effect.

### Infinite Scrolling 
- Enhances user experience with Infinite scrolling feature with channel videos data.

##

#### 🔍 Search Functionality  
- Users can type **keywords** in the search bar.  
- Results are displayed dynamically on a **Search Results Page**.

#### 📱 Fully Responsive Design  
- Works on **mobile, tablet, and desktop**.  
- Uses **CSS Grid & CSS media queries**.  

#### 🎨 UI/UX Enhancements  
- ✨ **Hover effects** on thumbnails and buttons.  
<!--- 🔄 **Smooth animations** for page transitions.  -->
- ⏳ **Skeleton loaders** for better user experience while loading content.  

#### 🌗 Light/Dark Mode Toggle  
- A **button to switch** between light and dark themes in Navabar.  
- Implemented using **React Context API**. 

# 🛠 Tech Stack  
- **Frontend:** React.js, CSS, Bootstrap  
- **State Management:** React Hooks, Context API, Redux Toolkit
- **API Integration:** YouTube Data API / Mock Data  
- **Routing:** React Router  
- **Custom Hooks:** For optimized data fetching  
- **Deployment:** Netlify

## 🔗 Deployment  
🚀 Hosted on **Netlify**  
- Check out the live version here: **[https://youtubeapp-ui.netlify.app/]**
- Checkout code at **[https://github.com/piyush932/Video-Streaming-App]**

# App Structure


- src
  - assets
  - components
    - ChannelVideo
    - Comments-Container **(Shows List of comments and their replies)**
    - Loading
    - Mini-Card
    - Navbar
    - SearchResultCard
    - Shimmer-UI **(Provide Shimmer Effect when loading data)**
    - Sidebar
    - Tags-Container **(Shows List of Tags for searching videos)**
    - Videos-Container **(Shows List of Homepage Videos)**
    - VideoTitle **(Video Title component in WatchVideo Page)**
  - context
  - CSS
  - data
  - Hooks
  - pages
    - Body.jsx
    - Channel.jsx
    - Container.jsx
    - Layout.jsx
    - SearchresultPage.jsx
    - Signin.jsx
    - WatchVideo.jsx
  - Redux
    - Reducers

### Main UI Components

- **WatchVideo.jsx**: Video Page of selected Video.
- **SearchresultPage.jsx**: Shows videos list according to tag searched .
- **Channel.jsx**: Shows channel data like description ,subscribers and all videos uploaded till now.
- **Signin.jsx**: Authentication Page for user .

---

## State Management & Data Flow

The application follows a structured approach for handling UI state and data flow:

- **Local State (useState)**: Used for handling small UI interactions (e.g., like Liking video,show description,show channel info etc).
- **Global State (Redux)**: Used for handling sidebar component .
- **Context API (useContext)**: Used for handling dark mode functionality .
- **Custom Hook (useChannel)**: Used for merging data effectively from the API combining videos data with channel IDs .

---


## 📂 Custom Data Files  

This project utilizes **predefined JSON datasets** to simulate YouTube API responses for different categories. These datasets are stored in the `data` folder and help in rendering category-specific videos without making actual API calls.  

### 📌 List of Custom Data Files  

| File Name                     | Description |
|--------------------------------|-------------|
| `MusicListResponse.json`       | A curated list of **music-related videos**, including trending songs, artists, and music performances. |
| `CourseResponse.json`          | Includes **educational and course-related videos**, such as programming tutorials, online courses, and tech talks. |
| `FashionResponse.json`         | A dataset of **fashion-related videos**, including beauty tips, fashion trends, and lifestyle vlogs. |
| `GamingResponse.json`          | A collection of **gaming videos**, featuring gameplay clips, e-sports events, and game reviews. |
| `MoviesResponse.json`          | Contains **movie-related content**, including trailers, behind-the-scenes clips, and film reviews. |
| `NewsResponse.json`            | A dataset of **news videos**, covering current affairs, global events, and political discussions. |
| `SportResponse.json`           | A list of **sports videos**, featuring match highlights, interviews, and fitness content. |

### 📌 How Custom Data is Used  

The application dynamically imports these JSON files to populate different **categories of videos** on the homepage and category pages. The files are imported in `src/components` and used in various React components.

## YOUTUBE API Reference

#### BASE URL

```http
  GET https://www.googleapis.com/youtube
```

#### Home Videos Endpoint

```http
  GET /v3/videos
```

| Parameter | Method   | Body | Description                          |
| :-------- | :------- |:------- |:-------------------------         |
| `?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&key={API_KEY}` | `GET` |         |Fetches the most popular videos in the region    |

#### Video Details Endpoint

```http
  GET /v3/videos
```

| Parameter | Method   | Body | Description                          |
| :-------- | :------- |:------- |:-------------------------         |
| `?key={API_KEY}&part=snippet,contentDetails,statistics&id={videoId}` | `GET` |         |Fetches details of a specific video     |

#### Video Comments Endpoint

```http
  GET /v3/commentThreads
```

| Parameter | Method   | Body | Description                          |
| :-------- | :------- |:------- |:-------------------------         |
| `/?key={API_KEY}&part=snippet,replies&videoId={videoId}&pageToken={optional}` | `GET` |         |Fetches comments on a specific video     |



#### Comment Replies Endpoint

```http
  GET /v3/comments
```

| Parameter | Method   | Body | Description                          |
| :-------- | :------- |:------- |:-------------------------         |
| `?key={API_KEY}&part=snippet&parentId={commentId}` | `GET` |         |Fetches replies to a specific comment|



#### Channel Info Endpoint

```http
  GET /v3/channels
```

| Parameter | Method   | Body | Description                          |
| :-------- | :------- |:------- |:-------------------------         |
| `?key={API_KEY}&part=snippet,contentDetails,statistics&id={channelId}` | `GET` |         |Fetches details of a specific channel|
| `?key={API_KEY}&part=snippet,contentDetails,statistics&id={channelIds}` | `GET` |         |Fetches details of multiple channels|

## Getting Started ▶️

Follow these steps to set up and run the project on your local machine.

#### 1. Clone the Repository

To get a local copy of this repository, run the following command in your terminal:

```sh
git clone https://github.com/piyush932/Video-Streaming-App.git
```

#### 2. Navigate to the Project

Change your working directory to the project folder:

```sh
cd Video-Streaming-App
```

#### 3. Install Dependencies

Install the required packages using npm:

```sh
npm i
```
#### 4. API KEY Setup

To fetch YouTube data, you'll need the following `API_KEYS`. Follow these steps to set them up:

1. Obtain a **YouTube API key from Google** by visiting [Google Developers - Getting Started](https://developers.google.com/youtube/v3/getting-started). If you need detailed instructions, you can also refer to [How to Get a YouTube API Key](https://blog.hubspot.com/website/how-to-get-youtube-api-key).
2. Get a YouTube V3 API key from [Rapid API - YouTube V3](https://rapidapi.com/ytdlfree/api/youtube-v31). If you haven't used Rapid API before, you'll need to sign up after signup subscribe to the **YouTube V3 API** for free.

Once you have your API keys, proceed with the following:

3. Create a `.env` file in the `root` directory of your project.
4. Place your API key values in the `.env` file as shown below. Note that I've included two Google API keys as backups in case one exceeds its usage limits.

```sh
        VITE_GOOGLE_API=<Your Google Api>
        VITE_YOUTUBE_API =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatitics&chart=mostPopular&maxResults=50&regionCode=IN&key=${VITE_GOOGLE_API}`
        VITE_YOUTUBE_SEARCH_API ="https://www.googleapis.com/youtube/v3/search?part=snippet&q="
        VITE_BASE_URL = "https://www.googleapis.com/youtube/v3"
```


#### 5. Start the Project

Run the following command to launch the ReactJS project in your local environment:

```sh
 npm run dev
```

## Testing and Debuging

Each module can be tested using the jest library for rendering compoents , displaying UI  and updation of state variables

## Future Enhancements
- Implement authentication and user profiles.
- Improve the live chat feature with WebSockets.
- Add extra functionality like adding Playlist options in Channel section .
- Add video upload functionality

## Conclusion
This project is a minimal frontend-only clone of Youtube designed to simulate a real video streaming platform experience.It serves as a strong foundation for further enhancements, including real-time interactions and authentication. 

### Screen Shots
| ![Screenshot 1](https://github.com/piyush932/Video-Streaming-App/blob/main/screenshots/Home-Laptop(L).png)  | 
| --- |
| ![Screenshot 2](https://github.com/piyush932/Video-Streaming-App/blob/main/screenshots/Home-Laptop.png)     | 
| ![Screenshot 3](https://github.com/piyush932/Video-Streaming-App/blob/main/screenshots/Home-Lightmode.png)  | 
| ![Screenshot 4](https://github.com/piyush932/Video-Streaming-App/blob/main/screenshots/SearchPage.png)      | 
| ![Screenshot 5](https://github.com/piyush932/Video-Streaming-App/blob/main/screenshots/ShimmerUI.png)       | 
| ![Screenshot 6](https://github.com/piyush932/Video-Streaming-App/blob/main/screenshots/Sidebar.png)         | 
| ![Screenshot 7](https://github.com/piyush932/Video-Streaming-App/blob/main/screenshots/SignInPage.png)      | 
| ![Screenshot 8](https://github.com/piyush932/Video-Streaming-App/blob/main/screenshots/WatchPage-Laptop(L).png)  | 
| ![Screenshot 9](https://github.com/piyush932/Video-Streaming-App/blob/main/screenshots/WatchPage-Laptop.png)  | 
| ![Screenshot 10](https://github.com/piyush932/Video-Streaming-App/blob/main/screenshots/ChannelPage-Laptop.png)  | 

### Mobile Screen Shots
| ![Screenshot 1](https://github.com/piyush932/Video-Streaming-App/blob/main/screenshots/Home-Mobile(L).png) |![Screenshot 2](https://github.com/piyush932/Video-Streaming-App/blob/main/screenshots/Home-Mobile(M).png) | ![Screenshot 3](https://github.com/piyush932/Video-Streaming-App/blob/main/screenshots/Home-Mobile(S).png) |
| --- | --- | --- |
| ![Screenshot 4](https://github.com/piyush932/Video-Streaming-App/blob/main/screenshots/ChannelPage-Mobile.png) | ![Screenshot 5](https://github.com/piyush932/Video-Streaming-App/blob/main/screenshots/WatchPage-Mobile(M).png) | ![Screenshot 6](https://github.com/piyush932/Video-Streaming-App/blob/main/screenshots/WatchPage-Sidecontainer-Mobile.png) |

### Tablet Screen Shots
| ![Screenshot 1](https://github.com/piyush932/Video-Streaming-App/blob/main/screenshots/Home-Tablet.png) |![Screenshot 2](https://github.com/piyush932/Video-Streaming-App/blob/main/screenshots/WatchPage-Tablet.png) 
| --- | --- |
| ![Screenshot 3](https://github.com/piyush932/Video-Streaming-App/blob/main/screenshots/ChannelPage-Tablet.png) | ![Screenshot 4](https://github.com/piyush932/Video-Streaming-App/blob/main/screenshots/SearchPage-Tablet.png) |


