# youtube-subscriptions-bulk-change
Bulk change to turn off subcribed channel notification

#Why
Instead of having to do this manually ![image](https://user-images.githubusercontent.com/32666311/191784887-46275e75-19a9-40a0-ae84-5408da86fa66.png). 
I write a simple program to autommatically loop through all channel.

#How to use it
1. Open https://www.youtube.com/feed/channels
2. Press F12 or Right click -> Inspect
3. Open Console tab ![image](https://user-images.githubusercontent.com/32666311/191785507-d14cdb54-5e8e-4d4d-bfdc-262ef7f006ff.png)
4. Paste the content of file index.js to this tab and press enter
5. Wait for the programm to finish.

As google has quota for requests per second, I set the program to stop for 1s periodically. 
