import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Header from './header';
import PrayerWall from './prayer';
import Music from './music';
import Sermon from './sermon';
import Events from './events';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.feedContainer}>

          <Text style={styles.feed}>Feed</Text>
          
          <View style={styles.resourceContainer}>
            <View style={styles.newsFeed}>
              <View style={styles.contentTitle}>
                <Text onPress={() => this.props.navigation.navigate('ResourceScreen')} style={styles.homeFont}>What is Prayer?</Text>
              </View>
            </View>

            <View style={styles.category}>
                <Text onPress={() => this.props.navigation.navigate('ResourceScreen')} style={styles.categoryFont}>Sermon</Text>
            </View>
          </View>

          <View style={styles.resourceContainer}>
            <View style={styles.newsFeed}>
              <View style={styles.contentTitle}>
                <Text onPress={() => this.props.navigation.navigate('ResourceScreen')} style={styles.homeFont}>YnD Tournament</Text>
              </View>
            </View>
              <View style={styles.category}>
                <Text onPress={() => this.props.navigation.navigate('ResourceScreen')} style={styles.categoryFont}>Events</Text>
            </View>
          </View>

          <View style={styles.resourceContainer}>
            <View style={styles.newsFeed}>
              <View style={styles.contentTitle}>
                <Text onPress={() => this.props.navigation.navigate('ResourceScreen')} style={styles.homeFont}>Worship Songs</Text>
              </View>
            </View>
            <View style={styles.category}>
                <Text onPress={() => this.props.navigation.navigate('ResourceScreen')} style={styles.categoryFont}>Music</Text>
            </View>
          </View>         

        </View>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  category: {
    marginTop: 15,
  },
  contentTitle: {
    paddingRight: 20,
    paddingTop: 15,
    alignItems: 'flex-end',
    width: '100%',
  },
  feed: {
    fontSize: 50,
    paddingLeft: 25,
    color: 'black',
  },
  resourceContainer: {
    paddingTop: 15,
    alignItems: 'center',
    shadowColor: '#000000',
  
  },
  newsFeed: {
    height: 125,
    width: '90%',
    backgroundColor: 'skyblue',
      display: 'flex', 
    //   justifyContent: 'flex-end', 
      alignItems: 'flex-start',
      paddingBottom: 10,
      paddingLeft: 25,
  
    },
    events: {
      flex: 1, 
      backgroundColor: 'skyblue',
      display: 'flex', 
      justifyContent: 'flex-end', 
      alignItems: 'flex-start',
      paddingBottom: 10,
      paddingLeft: 25,
    },
    music: {
      flex: 1, 
      backgroundColor: 'steelblue',
      display: 'flex', 
      justifyContent: 'flex-end', 
      alignItems: 'flex-start',
      paddingBottom: 10,
      paddingLeft: 25,
    },
    give: {
      flex: 1, 
      backgroundColor: 'dodgerblue',
      display: 'flex', 
      justifyContent: 'flex-end', 
      alignItems: 'flex-start',
      paddingBottom: 10,
      paddingLeft: 25,
    },
  });
  
