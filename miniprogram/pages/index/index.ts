// pages/index/index.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recommendPlaylists: [
      {
        name: '说唱音乐',
        playTimes: '1.5万',
        recommendCover: '../../images/recommend-playlist.png'
      },
      {
        name: '说唱音乐',
        playTimes: '1.5万',
        recommendCover: '../../images/recommend-playlist.png'
      },
      {
        name: '说唱音乐',
        playTimes: '1.5万',
        recommendCover: '../../images/recommend-playlist.png'
      }
    ],
    categoryBannerList: [
      {
        title: '流行音乐',
        desc: '1.5万播放',
        image: '../../images/hip-hop.png'
      },
      {
        title: '流行音乐',
        desc: '1.5万播放',
        image: '../../images/hip-hop.png'
      },
      {
        title: '流行音乐',
        desc: '1.5万播放',
        image: '../../images/hip-hop.png'
      }
    ],
    musicianBannerList: [
      {
        id: 111,
        name: '雷哈娜',
        category: '流行音乐',
        photo: '../../images/musician-photo.png'
      },
      {
        id: 222,
        name: '雷哈娜',
        category: '流行音乐',
        photo: '../../images/musician-photo.png'
      },
      {
        id: 333,
        name: '雷哈娜',
        category: '流行音乐',
        photo: '../../images/musician-photo.png'
      },
      {
        id: 333,
        name: '雷哈娜',
        category: '流行音乐',
        photo: '../../images/musician-photo.png'
      },
      {
        id: 333,
        name: '雷哈娜',
        category: '流行音乐',
        photo: '../../images/musician-photo.png'
      },
    ],
    playlist: [
      {
        id: 'dfds',
        image: '../../images/album.png',
        title: '心流歌单',
        description: '歌单描述'
      },
      {
        id: 'dfds',
        image: '../../images/album.png',
        title: '心流歌单',
        description: '歌单描述'
      },
      {
        id: 'dfds',
        image: '../../images/album.png',
        title: '心流歌单',
        description: '歌单描述'
      },
      {
        id: 'dfds',
        image: '../../images/album.png',
        title: '心流歌单',
        description: '歌单描述'
      },
      {
        id: 'dfds',
        image: '../../images/album.png',
        title: '心流歌单',
        description: '歌单描述'
      }
    ],
    musicList: [
      {cover: '../../images/yequ.jpeg', name: '夜曲', album: '十一月的肖邦', artist: '周杰伦'},
      {cover: '../../images/yequ.jpeg', name: '夜曲', album: '十一月的肖邦', artist: '周杰伦'},
      {cover: '../../images/yequ.jpeg', name: '夜曲', album: '十一月的肖邦', artist: '周杰伦'},
      {cover: '../../images/yequ.jpeg', name: '夜曲', album: '十一月的肖邦', artist: '周杰伦'}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})