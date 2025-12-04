import mongoose from 'mongoose';
const MONGODB_URI = process.env.MONGODB_URI;

declare global {
  var mongooseCache: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
}

let cached = global.mongooseCache; // hotreload in dev mode do not create a new conncetion whenever there is a new request
if (!cached) {
  cached = global.mongooseCache = { conn: null, promise: null };
}

export const connectToDatabase = async () => {
if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
  }
if( cached.conn ) {
    return cached.conn;
  }
if( !cached.promise ) {
    cached.promise = mongoose.connect(MONGODB_URI,{bufferCommands: false});
  } 
try{
    cached.conn = await cached.promise;
}
catch(error){
    cached.promise = null;
    throw error;
}
    console.log(`MongoDB connected ${process.env.NODE_ENV} - ${MONGODB_URI}`);
};

//Next.js reruns the app in each change in development mode and with out caching there would be multiple duplicate connections