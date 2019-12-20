import jestLogo from '../static/gears/jest_logo.png';
import react from '../static/gears/react.png';
import nest from '../static/gears/nest.png';
import node from '../static/gears/nodejslogo.png';
import redux from '../static/gears/redux.png';
import express from '../static/gears/express.png';
import redis from '../static/gears/redis.png';
import typescript from '../static/gears/typescript.png';
import netlify from '../static/gears/netlify.png';
import gatsby from '../static/gears/gatsby.png';
import travis from '../static/gears/travis.png';
import mysql from '../static/gears/MySQL.png';
import postgres from '../static/gears/mongo.png';
import mongo from '../static/gears/postgres.png';
import js from '../static/gears/js.png';
import docker from '../static/gears/docker.png';
import puppeteer from '../static/gears/puppeteer.png';


const gearsData = [
  { name: 'jest'  , src:jestLogo },
  { name: 'react' , src:react},
  { name: 'nest'  , src:nest },
  { name: 'node'  , src:node },
  { name: 'redux'  , src:redux },
  { name: 'express'  , src:express },
  { name: 'redis'  , src:redis },
  { name: 'typescript'  , src:typescript },
  { name: 'netlify'  , src:netlify },
  { name: 'gatsby'  , src:gatsby },
  { name: 'travis'  , src:travis },
  { name: 'mysql'  , src:mysql },
  { name: 'postgres'  , src:postgres },
  { name: 'mongo'  , src:mongo },
  { name: 'docker'  , src:docker },
  { name: 'js'  , src:js },
  { name: 'puppeteer'  , src:puppeteer },

]

/**
 * @param name
 * return src
 * Example name = nest
 * src = ../static/gears/nestjs.png
 */
export default function findSourceOfImageByName(name){
  const findTheObjByName = gearsData.find( gear => gear.name === name);
  if(findTheObjByName){
    return findTheObjByName.src
  }
}
