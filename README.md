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

## 🔥 Unique Feature 
### 🏆 Channel Page  
- Displays **channel details** including:  
  - 📸 **Channel banner & profile picture**  
  - 📌 **Channel name, subscriber count, and description**  
- Lists **all videos uploaded by the channel**.  
- Implements **infinite scrolling** for seamless browsing.  
- Uses a **custom hook** for efficient and dynamic data fetching. 

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
Check out the live version here: **[Netlify/Vercel Link](#)**

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
| `?key={API_KEY}&part=snippet,contentDetails,statistics&id={channelIds}` | `GET` |         |Fetches details of multiple channels
|


### Setup the project

 - Download this template from github and open it in your favourite text editor. 
 - Go inside the folder path and execute the following command:
  ```
  npm install
  ```
 - In the root directory create a `.env` file and add the following env variables
    ```
        VITE_GOOGLE_API=<Your Google Api>
        VITE_YOUTUBE_API =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatitics&chart=mostPopular&maxResults=50&regionCode=IN&key=${VITE_GOOGLE_API}`
        VITE_YOUTUBE_SEARCH_API ="https://www.googleapis.com/youtube/v3/search?part=snippet&q="
        VITE_BASE_URL = "https://www.googleapis.com/youtube/v3"
    ```

 - To run the client execute
 ```
 npm run dev
 ```
