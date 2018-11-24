state = {
    paused: true
  }

  videoError = (err) => {
    console.log(err);
  }

  onLoadVideo = () => {
    this.setState({
      paused: false
    })
  }

  playPause = () => {
    this.setState({
      paused: !this.state.paused
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.overlayVide}>
          <View style={styles.videoLayout}>
            <Video style={styles.video}
              source={require('./asset/videos/video.mp4')}
              onError={this.videoError}
              resizeMode="cover"
              paused={this.state.paused}
              onLoad={this.onLoadVideo}
            />
          </View>
          <ControlsVideo>
            <PlayPause 
              pause={this.state.paused} 
              onPress={this.playPause}/>
          </ControlsVideo>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#000',
      flex: 1
    },
    overlayVideo: {
      position: 'absolute',
      backgroundColor: 'yellow',
      bottom: 0,
      top: 0,
      left: 0,
      right: 0,
    },
    videoLayout: {
      borderWidth: 1,
      borderColor: 'red',
      paddingBottom: '56.25%',
    },
    video: {
      position: 'absolute',
      bottom: 0,
      top: 0,
      left: 0,
      right: 0,
    }
});
