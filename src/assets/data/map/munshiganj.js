const data = {
  district: "munshiganj",
  districtCode: '44',
  division: "dhaka",
  containedSeats: ['171', '172', '173'],
  data: [
    {
      seatNo: "171",
      text: "১",
      transform: "matrix(1 0 0 1 79.5186 71.2417)",
      points: `141.3,84.1 141.3,86.7 140,86.7 140,85.4 140,86.7 136.1,86.7 136.1,85.4 136.1,86.7 134.8,86.7 
      134.8,88 136.1,88 136.1,89.4 134.8,89.4 134.8,93.2 133.6,93.2 133.6,91.9 133.6,93.2 133.6,89.4 134.8,89.4 134.8,88 133.6,88 
      133.6,86.7 134.8,86.7 133.6,86.7 133.6,85.4 132.2,85.4 132.2,86.7 130.9,86.7 128.3,86.7 128.3,88 127,88 127,89.4 127,93.2 
      127,91.9 125.7,93.2 127,93.2 125.7,93.2 125.7,98.5 124.4,98.5 124.4,99.7 125.7,99.7 125.7,101 124.4,101 124.4,102.3 
      123.1,102.3 123.1,103.7 121.8,103.7 121.8,102.3 120.5,102.3 120.5,101 119.2,101 117.9,101 117.9,102.3 115.3,102.3 115.3,101 
      114,99.7 114,101 112.7,101 112.7,99.7 112.7,101 110.1,101 110.1,99.7 110.1,98.5 111.4,98.5 110.1,98.5 110.1,97.1 111.4,97.1 
      111.4,95.8 111.4,94.5 112.7,94.5 114,94.5 114,93.2 112.7,93.2 112.7,91.9 114,91.9 114,93.2 114,94.5 114,93.2 115.3,93.2 
      115.3,94.5 115.3,93.2 116.6,93.2 115.3,93.2 115.3,91.9 115.3,90.6 114,90.6 114,88 112.7,88 110.1,88 110.1,89.4 108.8,89.4 
      108.8,88 104.9,88 104.9,89.4 106.2,89.4 106.2,90.6 104.9,90.6 104.9,91.9 103.6,91.9 103.6,93.2 103.6,94.5 104.9,95.8 
      103.6,95.8 103.6,97.1 103.6,98.5 102.3,98.5 102.3,99.7 101,99.7 101,101 99.7,101 99.7,102.3 101,102.3 101,103.7 101,102.3 
      101,103.7 102.3,103.7 102.3,106.2 101,106.2 95.8,106.2 95.8,104.9 93.2,104.9 93.2,103.7 93.2,102.3 91.9,102.3 90.6,102.3 
      90.6,103.7 88,103.7 88,104.9 88,106.2 86.7,106.2 82.8,106.2 82.8,104.9 82.8,103.7 81.5,103.7 81.5,104.9 80.2,104.9 76.3,104.9 
      76.3,106.2 75,106.2 75,104.9 75,103.7 73.7,103.7 73.7,104.9 72.3,104.9 71.1,104.9 71.1,106.2 69.8,106.2 69.8,107.6 67.1,107.6 
      67.1,106.2 65.9,106.2 65.9,104.9 64.6,104.9 64.6,103.7 63.2,103.7 63.2,104.9 59.3,104.9 59.3,106.2 52.8,106.2 52.8,104.9 
      51.6,104.9 51.6,103.7 46.4,103.7 46.4,104.9 45,104.9 45,106.2 43.7,106.2 43.7,107.6 42.4,107.6 42.4,106.2 42.4,108.9 
      41.1,108.9 41.1,110.1 39.8,110.1 39.8,112.8 38.5,112.8 38.5,115.3 37.3,115.3 35.9,115.3 34.6,114.1 33.3,114.1 30.7,112.8 
      28.1,111.4 28.1,110.1 25.5,108.9 24.2,107.6 22.9,107.6 22.9,106.2 20.3,106.2 20.3,104.9 19,104.9 17.7,103.7 16.4,103.7 
      16.4,102.3 15.1,102.3 15.1,101 13.8,101 13.8,99.7 12.5,98.5 11.2,97.1 9.9,95.8 9.9,94.5 8.6,94.5 8.6,93.2 7.3,93.2 7.3,91.9 
      8.6,90.6 9.9,90.6 9.9,89.4 12.5,89.4 12.5,88 13.8,88 13.8,89.4 15.1,89.4 15.1,90.6 15.1,89.4 16.4,89.4 16.4,85.4 17.7,85.4 
      16.4,85.4 17.7,85.4 17.7,84.1 16.4,84.1 16.4,82.8 17.7,82.8 17.7,81.5 19,81.5 19,78.9 17.7,78.9 17.7,75 16.4,75 16.4,72.4 
      17.7,72.4 19,72.4 19,71.1 20.3,71.1 20.3,69.8 20.3,68.5 21.6,68.5 21.6,69.8 22.9,69.8 22.9,71.1 24.2,71.1 24.2,69.8 25.5,69.8 
      26.8,68.5 29.4,68.5 29.4,67.2 30.7,67.2 30.7,65.9 30.7,64.6 32,64.6 32,60.7 30.7,60.7 30.7,59.4 32,59.4 32,55.5 33.3,55.5 
      33.3,54.2 34.6,54.2 35.9,54.2 35.9,52.9 37.3,52.9 37.3,51.6 39.8,51.6 39.8,50.3 39.8,49 41.1,49 41.1,41.2 42.4,41.2 42.4,39.9 
      43.7,39.9 43.7,38.6 45,38.6 46.4,38.6 46.4,37.3 47.6,37.3 47.6,36 47.6,32.1 48.9,32.1 48.9,30.8 50.2,30.8 52.8,30.8 52.8,29.5 
      52.8,22.9 51.6,22.9 51.6,21.7 52.8,21.7 52.8,19 54.1,19 59.3,19 59.3,17.8 60.7,17.8 60.7,19 62,19 62,20.4 63.2,20.4 63.2,19 
      64.6,17.8 64.6,15.1 65.9,15.1 65.9,13.8 67.1,13.8 67.1,12.6 68.4,12.6 68.4,11.3 69.8,11.3 69.8,9.9 71.1,9.9 71.1,8.6 72.3,8.6 
      73.7,8.6 73.7,9.9 75,9.9 75,11.3 77.5,11.3 77.5,12.6 78.9,12.6 78.9,13.8 81.5,13.8 81.5,15.1 84.1,15.1 84.1,16.5 85.4,16.5 
      85.4,17.8 86.7,17.8 86.7,19 88,19 89.3,20.4 90.6,20.4 90.6,21.7 91.9,21.7 91.9,22.9 93.2,24.2 94.5,24.2 94.5,25.6 95.8,25.6 
      95.8,26.9 98.4,26.9 98.4,28.1 107.5,28.1 107.5,26.9 108.8,26.9 108.8,25.6 110.1,25.6 110.1,24.2 110.1,22.9 111.4,22.9 
      111.4,21.7 112.7,21.7 112.7,20.4 114,20.4 124.4,20.4 124.4,21.7 127,21.7 127,22.9 127,24.2 128.3,24.2 128.3,25.6 129.6,26.9 
      130.9,26.9 130.9,28.1 132.2,28.1 132.2,29.5 133.6,29.5 133.6,30.8 134.8,30.8 134.8,32.1 136.1,32.1 136.1,33.3 137.4,33.3 
      137.4,34.7 138.8,34.7 138.8,36 140,36 140,37.3 141.3,37.3 141.3,38.6 142.7,38.6 142.7,39.9 143.9,39.9 143.9,41.2 143.9,42.5 
      145.2,42.5 145.2,43.8 146.5,43.8 146.5,45.1 147.9,45.1 147.9,46.4 149.1,46.4 149.1,47.7 150.4,49 150.4,50.3 151.8,50.3 
      151.8,59.4 150.4,59.4 150.4,60.7 149.1,62 147.9,62 147.9,63.3 146.5,63.3 146.5,64.6 145.2,65.9 145.2,67.2 146.5,67.2 
      146.5,68.5 147.9,68.5 147.9,69.8 149.1,69.8 149.1,72.4 150.4,72.4 149.1,72.4 149.1,73.7 147.9,73.7 147.9,75 147.9,78.9 
      146.5,78.9 146.5,77.6 145.2,77.6 145.2,80.2 143.9,80.2 143.9,81.5 142.7,81.5 142.7,84.1 141.3,84.1  `,
    },
    {
      seatNo: "172",
      text: "২",
      transform: "matrix(1 0 0 1 124.7617 127.2632)",
      points: `185.6,115.3 185.6,121.9 184.3,121.9 184.3,124.4 183,124.4 183,125.8 181.7,125.8 181.7,128.4 
      180.4,128.4 180.4,131 179,131 179,134.9 177.8,134.9 177.8,138.8 176.5,140.1 176.5,142.7 176.5,144 176.5,149.2 175.2,149.2 
      175.2,150.5 176.5,150.5 180.4,150.5 180.4,151.8 180.4,154.4 181.7,154.4 181.7,155.7 183,155.7 181.7,157 175.2,157 175.2,155.7 
      172.6,155.7 172.6,154.4 170,154.4 168.6,153.1 164.7,153.1 164.7,151.8 158.3,151.8 158.3,150.5 146.5,150.5 146.5,151.8 
      146.5,153.1 147.9,153.1 147.9,154.4 146.5,154.4 146.5,155.7 145.2,155.7 143.9,155.7 143.9,154.4 143.9,155.7 142.7,155.7 
      142.7,158.3 141.3,158.3 140,158.3 140,157 136.1,157 136.1,155.7 136.1,157 134.8,157 134.8,158.3 133.6,158.3 133.6,159.6 
      132.2,159.6 132.2,155.7 130.9,155.7 130.9,154.4 129.6,154.4 129.6,153.1 128.3,153.1 124.4,153.1 125.7,153.1 125.7,150.5 
      124.4,150.5 123.1,150.5 123.1,149.2 120.5,149.2 120.5,147.9 117.9,147.9 117.9,146.6 115.3,146.6 115.3,145.3 114,145.3 114,144 
      111.4,142.7 108.8,142.7 108.8,141.4 103.6,141.4 103.6,140.1 97.1,140.1 97.1,138.8 90.6,138.8 90.6,137.5 88,137.5 88,136.2 
      86.7,136.2 86.7,134.9 85.4,134.9 85.4,133.6 84.1,133.6 84.1,132.3 82.8,132.3 82.8,131 77.5,131 77.5,132.3 75,132.3 75,133.6 
      69.8,133.6 69.8,132.3 67.1,132.3 67.1,131 64.6,131 64.6,129.6 62,129.6 62,128.4 60.7,128.4 59.3,127.1 56.8,127.1 56.8,125.8 
      52.8,125.8 52.8,124.4 51.6,124.4 51.6,123.2 48.9,123.2 48.9,121.9 46.4,121.9 46.4,120.5 43.7,120.5 43.7,119.3 41.1,119.3 
      41.1,118 39.8,118 39.8,116.7 37.3,116.7 37.3,115.3 38.5,115.3 38.5,114.1 38.5,112.8 39.8,112.8 39.8,110.1 41.1,110.1 
      41.1,108.9 42.4,108.9 42.4,106.2 42.4,107.6 43.7,107.6 43.7,106.2 45,106.2 45,104.9 46.4,104.9 46.4,103.7 51.6,103.7 
      51.6,104.9 52.8,104.9 52.8,106.2 59.3,106.2 59.3,104.9 63.2,104.9 63.2,103.7 64.6,103.7 64.6,104.9 65.9,104.9 65.9,106.2 
      67.1,106.2 67.1,107.6 69.8,107.6 69.8,106.2 71.1,106.2 71.1,104.9 73.7,104.9 73.7,103.7 75,103.7 75,104.9 75,106.2 76.3,106.2 
      76.3,104.9 77.5,104.9 81.5,104.9 81.5,103.7 82.8,103.7 82.8,104.9 82.8,106.2 84.1,106.2 88,106.2 88,104.9 88,103.7 89.3,103.7 
      90.6,103.7 90.6,102.3 93.2,102.3 93.2,103.7 93.2,104.9 94.5,104.9 95.8,104.9 95.8,106.2 102.3,106.2 102.3,104.9 102.3,103.7 
      101,103.7 101,102.3 101,103.7 101,102.3 99.7,102.3 99.7,101 101,101 101,99.7 102.3,99.7 102.3,98.5 103.6,98.5 103.6,95.8 
      104.9,95.8 103.6,94.5 103.6,91.9 104.9,91.9 104.9,90.6 106.2,90.6 106.2,89.4 104.9,89.4 104.9,88 106.2,88 108.8,88 108.8,89.4 
      110.1,89.4 110.1,88 114,88 114,89.4 114,90.6 115.3,90.6 115.3,93.2 116.6,93.2 115.3,93.2 115.3,94.5 115.3,93.2 114,93.2 
      114,94.5 114,93.2 114,91.9 112.7,91.9 112.7,93.2 114,93.2 114,94.5 112.7,94.5 111.4,94.5 111.4,95.8 111.4,97.1 110.1,97.1 
      110.1,98.5 111.4,98.5 110.1,98.5 110.1,99.7 110.1,101 111.4,101 112.7,101 112.7,99.7 112.7,101 114,101 114,99.7 115.3,101 
      115.3,102.3 116.6,102.3 117.9,102.3 117.9,101 120.5,101 120.5,102.3 121.8,102.3 121.8,103.7 123.1,103.7 123.1,102.3 
      124.4,102.3 124.4,101 125.7,101 125.7,99.7 124.4,99.7 124.4,98.5 125.7,98.5 125.7,97.1 125.7,93.2 127,93.2 125.7,93.2 127,91.9 
      127,93.2 127,91.9 127,88 128.3,88 128.3,86.7 129.6,86.7 132.2,86.7 132.2,85.4 133.6,85.4 133.6,86.7 134.8,86.7 133.6,86.7 
      133.6,88 134.8,88 134.8,89.4 133.6,89.4 133.6,93.2 133.6,91.9 133.6,93.2 134.8,93.2 134.8,89.4 136.1,89.4 136.1,88 134.8,88 
      134.8,86.7 136.1,86.7 136.1,85.4 136.1,86.7 140,86.7 140,85.4 140,86.7 141.3,86.7 141.3,84.1 142.7,84.1 142.7,81.5 143.9,81.5 
      143.9,80.2 145.2,80.2 145.2,77.6 146.5,77.6 146.5,78.9 147.9,78.9 147.9,73.7 149.1,73.7 149.1,72.4 150.4,72.4 151.8,72.4 
      151.8,73.7 153.1,73.7 153.1,75 160.9,75 160.9,73.7 162.2,73.7 162.2,72.4 163.5,72.4 163.5,71.1 164.7,71.1 164.7,69.8 
      166.1,69.8 166.1,68.5 168.6,68.5 168.6,69.8 168.6,71.1 167.4,71.1 164.7,71.1 164.7,72.4 164.7,73.7 166.1,73.7 171.3,73.7 
      171.3,72.4 173.8,72.4 173.8,73.7 172.6,73.7 172.6,75 172.6,76.3 171.3,76.3 171.3,80.2 170,80.2 170,81.5 171.3,81.5 171.3,82.8 
      170,82.8 170,84.1 168.6,84.1 168.6,89.4 167.4,89.4 167.4,90.6 168.6,90.6 168.6,93.2 170,93.2 170,98.5 168.6,98.5 170,98.5 
      170,99.7 173.8,99.7 173.8,101 176.5,101 176.5,99.7 179,99.7 179,101 179,102.3 179,104.9 180.4,104.9 181.7,104.9 183,103.7 
      183,106.2 184.3,106.2 184.3,107.6 183,107.6 184.3,107.6 184.3,108.9 183,108.9 183,110.1 183,112.8 184.3,112.8 185.6,112.8 
      185.6,114.1 185.6,115.3 `,
    },
    {
      seatNo: "173",
      text: "৩",
      transform: "matrix(1 0 0 1 235.0918 89.5889)",
      points: `168.6,86.7 168.6,84.1 170,84.1 170,82.8 171.3,82.8 171.3,81.5 170,81.5 170,80.2 171.3,80.2 
      171.3,76.3 172.6,76.3 172.6,73.7 173.8,73.7 173.8,72.4 172.6,72.4 171.3,72.4 171.3,73.7 164.7,73.7 164.7,72.4 164.7,71.1 
      166.1,71.1 168.6,71.1 168.6,69.8 168.6,68.5 167.4,68.5 167.4,67.2 168.6,67.2 168.6,65.9 170,65.9 171.3,65.9 171.3,64.6 
      175.2,64.6 175.2,63.3 180.4,63.3 181.7,62 192.1,62 192.1,63.3 194.7,63.3 194.7,64.6 196,64.6 196,65.9 198.6,65.9 198.6,67.2 
      202.5,67.2 202.5,68.5 205.1,68.5 205.1,69.8 206.4,69.8 206.4,71.1 207.7,71.1 207.7,72.4 209,72.4 209,73.7 209,75 210.3,75 
      210.3,76.3 211.6,76.3 211.6,78.9 212.9,78.9 212.9,80.2 214.2,80.2 214.2,82.8 215.5,82.8 215.5,84.1 216.8,84.1 222,84.1 
      222,82.8 223.3,82.8 223.3,81.5 223.3,80.2 222,80.2 222,77.6 220.7,77.6 220.7,75 219.4,75 219.4,72.4 218.1,72.4 218.1,71.1 
      216.8,71.1 216.8,68.5 215.5,68.5 215.5,67.2 214.2,67.2 214.2,64.6 212.9,64.6 212.9,60.7 211.6,60.7 211.6,58.1 212.9,56.8 
      212.9,54.2 214.2,54.2 214.2,52.9 215.5,52.9 215.5,51.6 216.8,51.6 218.1,51.6 218.1,50.3 223.3,50.3 223.3,49 237.6,49 
      237.6,47.7 240.3,47.7 240.3,46.4 241.5,46.4 241.5,45.1 242.8,45.1 242.8,43.8 244.2,43.8 244.2,42.5 245.4,42.5 245.4,41.2 
      246.7,41.2 246.7,39.9 248.1,39.9 248.1,38.6 248.1,37.3 249.4,37.3 250.6,37.3 250.6,38.6 259.8,38.6 259.8,37.3 261,37.3 
      261,38.6 262.4,38.6 262.4,39.9 262.4,41.2 263.7,41.2 263.7,45.1 265,45.1 265,47.7 266.2,47.7 266.2,50.3 267.6,50.3 267.6,54.2 
      266.2,54.2 257.1,54.2 257.1,55.5 257.1,60.7 258.5,60.7 258.5,62 259.8,62 266.2,62 266.2,63.3 270.1,63.3 270.1,64.6 271.5,64.6 
      272.8,65.9 274.1,65.9 274.1,67.2 275.3,68.5 275.3,69.8 276.7,69.8 278,69.8 278,71.1 279.3,72.4 278,72.4 278,73.7 279.3,73.7 
      279.3,75 279.3,77.6 280.6,77.6 280.6,80.2 281.9,80.2 281.9,82.8 283.2,82.8 283.2,85.4 284.5,85.4 284.5,89.4 285.8,89.4 
      285.8,90.6 287.1,90.6 288.4,90.6 288.4,91.9 289.7,91.9 289.7,93.2 291,94.5 291,98.5 289.7,98.5 289.7,101 288.4,101 288.4,102.3 
      287.1,102.3 287.1,103.7 285.8,103.7 284.5,103.7 284.5,104.9 281.9,104.9 281.9,106.2 279.3,106.2 279.3,107.6 278,107.6 
      278,108.9 271.5,108.9 271.5,107.6 266.2,107.6 266.2,106.2 263.7,106.2 263.7,104.9 262.4,104.9 262.4,103.7 259.8,103.7 
      259.8,102.3 257.1,102.3 257.1,101 250.6,101 250.6,102.3 248.1,102.3 248.1,103.7 248.1,104.9 246.7,104.9 246.7,106.2 
      245.4,106.2 245.4,107.6 244.2,107.6 241.5,107.6 240.3,108.9 238.9,108.9 238.9,107.6 236.3,107.6 236.3,106.2 235.1,106.2 
      235.1,104.9 235.1,103.7 233.7,103.7 233.7,104.9 232.4,104.9 232.4,103.7 232.4,104.9 229.9,104.9 228.5,106.2 227.2,106.2 
      227.2,104.9 220.7,104.9 220.7,106.2 220.7,107.6 222,107.6 222,111.4 223.3,111.4 224.6,111.4 224.6,112.8 225.9,112.8 
      225.9,114.1 225.9,115.3 224.6,115.3 224.6,119.3 223.3,119.3 222,119.3 222,120.5 222,124.4 223.3,124.4 223.3,125.8 222,125.8 
      222,132.3 220.7,132.3 220.7,134.9 219.4,134.9 219.4,137.5 218.1,137.5 218.1,138.8 216.8,138.8 216.8,141.4 215.5,141.4 
      215.5,142.7 214.2,142.7 214.2,144 212.9,144 212.9,146.6 211.6,146.6 211.6,147.9 210.3,147.9 210.3,149.2 209,149.2 209,151.8 
      207.7,151.8 207.7,154.4 206.4,154.4 206.4,155.7 205.1,155.7 205.1,158.3 203.8,158.3 203.8,162.2 202.5,162.2 202.5,170 
      201.2,170 199.9,168.7 198.6,168.7 198.6,167.4 196,167.4 196,166.1 193.4,166.1 193.4,164.8 192.1,164.8 190.8,163.5 189.5,162.2 
      189.5,160.9 188.2,160.9 186.9,160.9 186.9,159.6 185.6,159.6 185.6,158.3 184.3,158.3 183,157 181.7,157 183,155.7 181.7,155.7 
      181.7,154.4 180.4,154.4 180.4,153.1 180.4,150.5 179,150.5 175.2,150.5 175.2,149.2 176.5,149.2 176.5,147.9 176.5,140.1 
      177.8,138.8 177.8,134.9 179,134.9 179,131 180.4,131 180.4,128.4 181.7,128.4 181.7,125.8 183,125.8 183,124.4 184.3,124.4 
      184.3,121.9 185.6,121.9 185.6,112.8 184.3,112.8 183,112.8 183,111.4 183,108.9 184.3,108.9 184.3,107.6 183,107.6 184.3,107.6 
      184.3,106.2 183,106.2 183,104.9 183,103.7 181.7,104.9 179,104.9 179,103.7 179,99.7 177.8,99.7 176.5,99.7 176.5,101 173.8,101 
      173.8,99.7 170,99.7 170,98.5 168.6,98.5 170,98.5 170,93.2 168.6,93.2 168.6,90.6 167.4,90.6 167.4,89.4 168.6,89.4 168.6,86.7  `,
    },
  ],
};

export default data;
