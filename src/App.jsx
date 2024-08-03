import React from 'react';
import './App.css';
import { FaHome, FaPlay, FaBell, FaDownload, FaUser } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

const videos = [
  {
    id: 'dRYPEcRL8vE',
    title: 'Video 1',
    channel: "Channel 1",
    views: '1.2M views'
  },
  {
    id: '2ZSoORU-vKQ',
    title: 'Video 2',
    channel: "Channel 2",
    views: '900K views'
  },
  {
    id: 'VaAKym4BDt4',
    title: 'Video 3',
    channel: "Channel 3",
    views: '600K views'
  },
  {
    id: 'fY7jOZbF1OA',
    title: 'Video 4',
    channel: "Channel 4",
    views: '1M views'
  },
  {
    id: 'tLaVpb8e0Bo',
    title: 'Video 5',
    channel: "Channel 5",
    views: '750K views'
  },
  {
    id: '0xZsizvNJh0',
    title: 'Video 6',
    channel: "Channel 6",
    views: '300K views'
  },
  {
    id: '0xZsizvNJh0',
    title: 'Video 7',
    channel: "Channel 7",
    views: '200K views'
  },
  {
    id: '0xZsizvNJh0',
    title: 'Video 8',
    channel: "Channel 8",
    views: '150K views'
  },
  {
    id: 'tLaVpb8e0Bo',
    title: 'Video 9',
    channel: "Channel 9",
    views: '750K views'
  },
  {
    id: '0xZsizvNJh0',
    title: 'Video 10',
    channel: "Channel 10",
    views: '300K views'
  },
  {
    id: '0xZsizvNJh0',
    title: 'Video 11',
    channel: "Channel 11",
    views: '200K views'
  },
  {
    id: '0xZsizvNJh0',
    title: 'Video 12',
    channel: "Channel 12",
    views: '150K views'
  }
];

function App() {
  const getThumbnailUrl = (videoId) => `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;

  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar-content">
          <h1 className="logo"><FaYoutube /> YouTube</h1>
          <div className="navbar-links">
            <a href="#home"><FaHome /> Home</a>
            <a href="#shorts"><FaPlay /> Shorts</a>
            <a href="#subscriptions"><FaBell /> Subscriptions</a>
            <a href="#downloads"><FaDownload /> Downloads</a>
            <a href="#profile"><FaUser /> Profile</a>
          </div>
        </div>
      </nav>
      <div className="content">
        <input type="text" placeholder="Search..." className="searchbar" />
        <div className="video-grid">
          {videos.map((video) => (
            <a key={video.id} href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer" className="video-item">
              <img src={getThumbnailUrl(video.id)} alt={video.title} className="thumbnail" />
              <div className="video-info">
                <div className="video-details">
                  <p className="video-title">{video.title}</p>
                  <p className="channel">{video.channel}</p>
                  <p className="video-views">{video.views}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
