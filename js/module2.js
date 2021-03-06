var _ = require('lodash');

var people = [{
  "id": 1,
  "gender": "Male",
  "first_name": "Wayne",
  "last_name": "Arnold",
  "email": "warnold0@phoca.cz",
  "ip_address": "186.45.81.67"
}, {
  "id": 2,
  "gender": "Female",
  "first_name": "Kathryn",
  "last_name": "Wheeler",
  "email": "kwheeler1@ebay.com",
  "ip_address": "204.103.201.123"
}, {
  "id": 3,
  "gender": "Female",
  "first_name": "Louise",
  "last_name": "Sanders",
  "email": "lsanders2@cargocollective.com",
  "ip_address": "188.54.107.32"
}, {
  "id": 4,
  "gender": "Male",
  "first_name": "Frank",
  "last_name": "Garrett",
  "email": "fgarrett3@google.com.hk",
  "ip_address": "207.145.23.10"
}, {
  "id": 5,
  "gender": "Male",
  "first_name": "Roger",
  "last_name": "Reynolds",
  "email": "rreynolds4@gizmodo.com",
  "ip_address": "37.97.247.141"
}, {
  "id": 6,
  "gender": "Female",
  "first_name": "Ruth",
  "last_name": "Banks",
  "email": "rbanks5@angelfire.com",
  "ip_address": "17.103.149.226"
}, {
  "id": 7,
  "gender": "Female",
  "first_name": "Louise",
  "last_name": "Willis",
  "email": "lwillis6@loc.gov",
  "ip_address": "131.198.237.238"
}, {
  "id": 8,
  "gender": "Female",
  "first_name": "Kathy",
  "last_name": "Adams",
  "email": "kadams7@buzzfeed.com",
  "ip_address": "68.95.111.124"
}, {
  "id": 9,
  "gender": "Male",
  "first_name": "Mark",
  "last_name": "Carroll",
  "email": "mcarroll8@archive.org",
  "ip_address": "234.86.69.69"
}, {
  "id": 10,
  "gender": "Female",
  "first_name": "Denise",
  "last_name": "Shaw",
  "email": "dshaw9@nymag.com",
  "ip_address": "150.203.98.252"
}, {
  "id": 11,
  "gender": "Female",
  "first_name": "Annie",
  "last_name": "Jenkins",
  "email": "ajenkinsa@samsung.com",
  "ip_address": "20.26.238.138"
}, {
  "id": 12,
  "gender": "Female",
  "first_name": "Sarah",
  "last_name": "Peters",
  "email": "spetersb@ameblo.jp",
  "ip_address": "125.139.210.111"
}, {
  "id": 13,
  "gender": "Female",
  "first_name": "Robin",
  "last_name": "Ferguson",
  "email": "rfergusonc@nature.com",
  "ip_address": "11.6.245.127"
}, {
  "id": 14,
  "gender": "Male",
  "first_name": "Kenneth",
  "last_name": "Taylor",
  "email": "ktaylord@alexa.com",
  "ip_address": "117.111.210.247"
}, {
  "id": 15,
  "gender": "Female",
  "first_name": "Rebecca",
  "last_name": "Gonzalez",
  "email": "rgonzaleze@loc.gov",
  "ip_address": "98.198.134.108"
}, {
  "id": 16,
  "gender": "Male",
  "first_name": "Joshua",
  "last_name": "Alexander",
  "email": "jalexanderf@whitehouse.gov",
  "ip_address": "185.241.18.11"
}, {
  "id": 17,
  "gender": "Female",
  "first_name": "Jennifer",
  "last_name": "Scott",
  "email": "jscottg@gmpg.org",
  "ip_address": "5.19.65.58"
}, {
  "id": 18,
  "gender": "Male",
  "first_name": "Chris",
  "last_name": "Cox",
  "email": "ccoxh@dmoz.org",
  "ip_address": "243.165.60.180"
}, {
  "id": 19,
  "gender": "Female",
  "first_name": "Teresa",
  "last_name": "Carroll",
  "email": "tcarrolli@independent.co.uk",
  "ip_address": "88.179.196.111"
}, {
  "id": 20,
  "gender": "Male",
  "first_name": "Alan",
  "last_name": "Graham",
  "email": "agrahamj@digg.com",
  "ip_address": "234.53.217.71"
}, {
  "id": 21,
  "gender": "Female",
  "first_name": "Phyllis",
  "last_name": "Lane",
  "email": "planek@tuttocitta.it",
  "ip_address": "78.187.169.195"
}, {
  "id": 22,
  "gender": "Male",
  "first_name": "Jesse",
  "last_name": "Stewart",
  "email": "jstewartl@shinystat.com",
  "ip_address": "120.140.167.35"
}, {
  "id": 23,
  "gender": "Male",
  "first_name": "Phillip",
  "last_name": "Kelly",
  "email": "pkellym@de.vu",
  "ip_address": "132.205.17.214"
}, {
  "id": 24,
  "gender": "Male",
  "first_name": "Adam",
  "last_name": "Clark",
  "email": "aclarkn@google.com.hk",
  "ip_address": "206.108.138.219"
}, {
  "id": 25,
  "gender": "Female",
  "first_name": "Christine",
  "last_name": "King",
  "email": "ckingo@dmoz.org",
  "ip_address": "249.143.186.250"
}, {
  "id": 26,
  "gender": "Male",
  "first_name": "Craig",
  "last_name": "Williams",
  "email": "cwilliamsp@scientificamerican.com",
  "ip_address": "218.2.53.209"
}, {
  "id": 27,
  "gender": "Male",
  "first_name": "Joseph",
  "last_name": "Dixon",
  "email": "jdixonq@indiegogo.com",
  "ip_address": "81.98.192.101"
}, {
  "id": 28,
  "gender": "Male",
  "first_name": "Ronald",
  "last_name": "Dixon",
  "email": "rdixonr@ehow.com",
  "ip_address": "249.51.135.131"
}, {
  "id": 29,
  "gender": "Male",
  "first_name": "Jerry",
  "last_name": "Cunningham",
  "email": "jcunninghams@nbcnews.com",
  "ip_address": "252.126.87.81"
}, {
  "id": 30,
  "gender": "Male",
  "first_name": "Timothy",
  "last_name": "Snyder",
  "email": "tsnydert@edublogs.org",
  "ip_address": "72.42.251.133"
}, {
  "id": 31,
  "gender": "Female",
  "first_name": "Janice",
  "last_name": "Robinson",
  "email": "jrobinsonu@reddit.com",
  "ip_address": "173.110.188.52"
}, {
  "id": 32,
  "gender": "Female",
  "first_name": "Irene",
  "last_name": "Ray",
  "email": "irayv@chicagotribune.com",
  "ip_address": "186.129.90.78"
}, {
  "id": 33,
  "gender": "Male",
  "first_name": "Philip",
  "last_name": "Alvarez",
  "email": "palvarezw@twitter.com",
  "ip_address": "148.101.105.117"
}, {
  "id": 34,
  "gender": "Female",
  "first_name": "Michelle",
  "last_name": "Moreno",
  "email": "mmorenox@accuweather.com",
  "ip_address": "254.41.155.150"
}, {
  "id": 35,
  "gender": "Female",
  "first_name": "Theresa",
  "last_name": "Morrison",
  "email": "tmorrisony@home.pl",
  "ip_address": "128.144.64.80"
}, {
  "id": 36,
  "gender": "Female",
  "first_name": "Sharon",
  "last_name": "Richardson",
  "email": "srichardsonz@edublogs.org",
  "ip_address": "19.108.55.207"
}, {
  "id": 37,
  "gender": "Female",
  "first_name": "Linda",
  "last_name": "Fuller",
  "email": "lfuller10@berkeley.edu",
  "ip_address": "142.135.180.28"
}, {
  "id": 38,
  "gender": "Female",
  "first_name": "Kathleen",
  "last_name": "Phillips",
  "email": "kphillips11@youtu.be",
  "ip_address": "204.10.47.54"
}, {
  "id": 39,
  "gender": "Male",
  "first_name": "Jason",
  "last_name": "Russell",
  "email": "jrussell12@goodreads.com",
  "ip_address": "195.16.111.244"
}, {
  "id": 40,
  "gender": "Female",
  "first_name": "Melissa",
  "last_name": "Hawkins",
  "email": "mhawkins13@e-recht24.de",
  "ip_address": "135.8.188.177"
}, {
  "id": 41,
  "gender": "Female",
  "first_name": "Kathleen",
  "last_name": "Bryant",
  "email": "kbryant14@github.io",
  "ip_address": "221.219.34.138"
}, {
  "id": 42,
  "gender": "Male",
  "first_name": "Henry",
  "last_name": "Garza",
  "email": "hgarza15@comsenz.com",
  "ip_address": "248.118.197.197"
}, {
  "id": 43,
  "gender": "Male",
  "first_name": "Anthony",
  "last_name": "Hunter",
  "email": "ahunter16@hp.com",
  "ip_address": "54.93.113.148"
}, {
  "id": 44,
  "gender": "Female",
  "first_name": "Cynthia",
  "last_name": "Arnold",
  "email": "carnold17@answers.com",
  "ip_address": "11.145.58.98"
}, {
  "id": 45,
  "gender": "Female",
  "first_name": "Anna",
  "last_name": "Peters",
  "email": "apeters18@sfgate.com",
  "ip_address": "96.159.156.186"
}, {
  "id": 46,
  "gender": "Female",
  "first_name": "Lisa",
  "last_name": "Crawford",
  "email": "lcrawford19@free.fr",
  "ip_address": "175.31.100.208"
}, {
  "id": 47,
  "gender": "Male",
  "first_name": "Carl",
  "last_name": "Ward",
  "email": "cward1a@businessinsider.com",
  "ip_address": "4.47.91.201"
}, {
  "id": 48,
  "gender": "Female",
  "first_name": "Carol",
  "last_name": "Clark",
  "email": "cclark1b@devhub.com",
  "ip_address": "236.9.147.91"
}, {
  "id": 49,
  "gender": "Male",
  "first_name": "Roger",
  "last_name": "Henderson",
  "email": "rhenderson1c@bigcartel.com",
  "ip_address": "117.157.59.50"
}, {
  "id": 50,
  "gender": "Female",
  "first_name": "Jean",
  "last_name": "Turner",
  "email": "jturner1d@nba.com",
  "ip_address": "126.43.99.235"
}, {
  "id": 51,
  "gender": "Female",
  "first_name": "Ruby",
  "last_name": "Garrett",
  "email": "rgarrett1e@shinystat.com",
  "ip_address": "165.41.213.197"
}, {
  "id": 52,
  "gender": "Female",
  "first_name": "Amanda",
  "last_name": "Armstrong",
  "email": "aarmstrong1f@yellowbook.com",
  "ip_address": "110.39.218.128"
}, {
  "id": 53,
  "gender": "Male",
  "first_name": "Jason",
  "last_name": "Perez",
  "email": "jperez1g@slashdot.org",
  "ip_address": "85.176.100.222"
}, {
  "id": 54,
  "gender": "Female",
  "first_name": "Alice",
  "last_name": "Fernandez",
  "email": "afernandez1h@bigcartel.com",
  "ip_address": "48.244.12.189"
}, {
  "id": 55,
  "gender": "Female",
  "first_name": "Kathryn",
  "last_name": "Garrett",
  "email": "kgarrett1i@bigcartel.com",
  "ip_address": "131.216.172.61"
}, {
  "id": 56,
  "gender": "Male",
  "first_name": "Nicholas",
  "last_name": "Richardson",
  "email": "nrichardson1j@jalbum.net",
  "ip_address": "49.204.11.163"
}, {
  "id": 57,
  "gender": "Female",
  "first_name": "Andrea",
  "last_name": "Sanchez",
  "email": "asanchez1k@dropbox.com",
  "ip_address": "19.32.114.28"
}, {
  "id": 58,
  "gender": "Female",
  "first_name": "Ashley",
  "last_name": "Harper",
  "email": "aharper1l@fda.gov",
  "ip_address": "161.34.144.11"
}, {
  "id": 59,
  "gender": "Male",
  "first_name": "Ronald",
  "last_name": "Powell",
  "email": "rpowell1m@blogtalkradio.com",
  "ip_address": "161.242.185.252"
}, {
  "id": 60,
  "gender": "Female",
  "first_name": "Ashley",
  "last_name": "Baker",
  "email": "abaker1n@zimbio.com",
  "ip_address": "44.80.20.200"
}, {
  "id": 61,
  "gender": "Male",
  "first_name": "Eric",
  "last_name": "Greene",
  "email": "egreene1o@umn.edu",
  "ip_address": "114.138.247.76"
}, {
  "id": 62,
  "gender": "Female",
  "first_name": "Evelyn",
  "last_name": "Hill",
  "email": "ehill1p@ycombinator.com",
  "ip_address": "223.75.34.43"
}, {
  "id": 63,
  "gender": "Female",
  "first_name": "Sarah",
  "last_name": "Burke",
  "email": "sburke1q@trellian.com",
  "ip_address": "88.211.169.106"
}, {
  "id": 64,
  "gender": "Male",
  "first_name": "Ryan",
  "last_name": "Roberts",
  "email": "rroberts1r@scientificamerican.com",
  "ip_address": "240.226.76.126"
}, {
  "id": 65,
  "gender": "Female",
  "first_name": "Karen",
  "last_name": "Watkins",
  "email": "kwatkins1s@usatoday.com",
  "ip_address": "247.12.105.18"
}, {
  "id": 66,
  "gender": "Female",
  "first_name": "Shirley",
  "last_name": "Clark",
  "email": "sclark1t@sciencedirect.com",
  "ip_address": "44.3.242.51"
}, {
  "id": 67,
  "gender": "Male",
  "first_name": "Jeremy",
  "last_name": "Little",
  "email": "jlittle1u@japanpost.jp",
  "ip_address": "80.143.200.101"
}, {
  "id": 68,
  "gender": "Male",
  "first_name": "Billy",
  "last_name": "Mccoy",
  "email": "bmccoy1v@wordpress.org",
  "ip_address": "74.236.235.70"
}, {
  "id": 69,
  "gender": "Male",
  "first_name": "Lawrence",
  "last_name": "James",
  "email": "ljames1w@sphinn.com",
  "ip_address": "237.217.239.162"
}, {
  "id": 70,
  "gender": "Male",
  "first_name": "Fred",
  "last_name": "Tucker",
  "email": "ftucker1x@slate.com",
  "ip_address": "135.186.132.73"
}, {
  "id": 71,
  "gender": "Male",
  "first_name": "Sean",
  "last_name": "Mason",
  "email": "smason1y@mysql.com",
  "ip_address": "120.219.127.130"
}, {
  "id": 72,
  "gender": "Female",
  "first_name": "Cynthia",
  "last_name": "Frazier",
  "email": "cfrazier1z@ucsd.edu",
  "ip_address": "125.156.21.254"
}, {
  "id": 73,
  "gender": "Male",
  "first_name": "Arthur",
  "last_name": "Gomez",
  "email": "agomez20@cyberchimps.com",
  "ip_address": "47.80.151.81"
}, {
  "id": 74,
  "gender": "Male",
  "first_name": "Kevin",
  "last_name": "Ellis",
  "email": "kellis21@networksolutions.com",
  "ip_address": "134.125.198.109"
}, {
  "id": 75,
  "gender": "Female",
  "first_name": "Lisa",
  "last_name": "Wilson",
  "email": "lwilson22@intel.com",
  "ip_address": "245.197.80.37"
}, {
  "id": 76,
  "gender": "Male",
  "first_name": "James",
  "last_name": "Hall",
  "email": "jhall23@cmu.edu",
  "ip_address": "102.101.13.214"
}, {
  "id": 77,
  "gender": "Female",
  "first_name": "Theresa",
  "last_name": "Bowman",
  "email": "tbowman24@creativecommons.org",
  "ip_address": "200.40.44.171"
}, {
  "id": 78,
  "gender": "Male",
  "first_name": "Ralph",
  "last_name": "Peterson",
  "email": "rpeterson25@hexun.com",
  "ip_address": "14.87.215.155"
}, {
  "id": 79,
  "gender": "Male",
  "first_name": "Eugene",
  "last_name": "Nguyen",
  "email": "enguyen26@nytimes.com",
  "ip_address": "120.150.84.14"
}, {
  "id": 80,
  "gender": "Female",
  "first_name": "Jennifer",
  "last_name": "Tucker",
  "email": "jtucker27@nba.com",
  "ip_address": "157.170.148.17"
}, {
  "id": 81,
  "gender": "Male",
  "first_name": "Joe",
  "last_name": "Campbell",
  "email": "jcampbell28@archive.org",
  "ip_address": "232.213.107.189"
}, {
  "id": 82,
  "gender": "Female",
  "first_name": "Kathy",
  "last_name": "Cole",
  "email": "kcole29@upenn.edu",
  "ip_address": "231.232.189.176"
}, {
  "id": 83,
  "gender": "Male",
  "first_name": "Harry",
  "last_name": "Bradley",
  "email": "hbradley2a@g.co",
  "ip_address": "46.161.2.158"
}, {
  "id": 84,
  "gender": "Male",
  "first_name": "Keith",
  "last_name": "Schmidt",
  "email": "kschmidt2b@upenn.edu",
  "ip_address": "194.213.155.84"
}, {
  "id": 85,
  "gender": "Male",
  "first_name": "Albert",
  "last_name": "Hart",
  "email": "ahart2c@prweb.com",
  "ip_address": "39.21.162.208"
}, {
  "id": 86,
  "gender": "Female",
  "first_name": "Diane",
  "last_name": "Moore",
  "email": "dmoore2d@marketwatch.com",
  "ip_address": "221.73.126.60"
}, {
  "id": 87,
  "gender": "Male",
  "first_name": "William",
  "last_name": "Fields",
  "email": "wfields2e@hugedomains.com",
  "ip_address": "198.9.32.65"
}, {
  "id": 88,
  "gender": "Female",
  "first_name": "Linda",
  "last_name": "Jones",
  "email": "ljones2f@yahoo.com",
  "ip_address": "63.235.203.0"
}, {
  "id": 89,
  "gender": "Male",
  "first_name": "Eugene",
  "last_name": "Hunt",
  "email": "ehunt2g@netlog.com",
  "ip_address": "235.9.101.69"
}, {
  "id": 90,
  "gender": "Female",
  "first_name": "Alice",
  "last_name": "Webb",
  "email": "awebb2h@guardian.co.uk",
  "ip_address": "117.44.247.234"
}, {
  "id": 91,
  "gender": "Female",
  "first_name": "Paula",
  "last_name": "Harper",
  "email": "pharper2i@cargocollective.com",
  "ip_address": "17.48.213.18"
}, {
  "id": 92,
  "gender": "Male",
  "first_name": "Eugene",
  "last_name": "Robertson",
  "email": "erobertson2j@bizjournals.com",
  "ip_address": "195.196.222.181"
}, {
  "id": 93,
  "gender": "Female",
  "first_name": "Melissa",
  "last_name": "Garrett",
  "email": "mgarrett2k@phoca.cz",
  "ip_address": "2.62.127.62"
}, {
  "id": 94,
  "gender": "Female",
  "first_name": "Christina",
  "last_name": "Harris",
  "email": "charris2l@so-net.ne.jp",
  "ip_address": "244.124.245.202"
}, {
  "id": 95,
  "gender": "Male",
  "first_name": "Keith",
  "last_name": "Collins",
  "email": "kcollins2m@instagram.com",
  "ip_address": "93.231.150.10"
}, {
  "id": 96,
  "gender": "Male",
  "first_name": "Roger",
  "last_name": "Thomas",
  "email": "rthomas2n@webeden.co.uk",
  "ip_address": "245.81.37.113"
}, {
  "id": 97,
  "gender": "Male",
  "first_name": "Gary",
  "last_name": "Matthews",
  "email": "gmatthews2o@java.com",
  "ip_address": "44.91.219.148"
}, {
  "id": 98,
  "gender": "Female",
  "first_name": "Mary",
  "last_name": "Wright",
  "email": "mwright2p@wunderground.com",
  "ip_address": "121.209.14.18"
}, {
  "id": 99,
  "gender": "Male",
  "first_name": "Ralph",
  "last_name": "Reed",
  "email": "rreed2q@ask.com",
  "ip_address": "99.163.2.230"
}, {
  "id": 100,
  "gender": "Male",
  "first_name": "Mark",
  "last_name": "Campbell",
  "email": "mcampbell2r@netscape.com",
  "ip_address": "27.238.113.77"
}];

var femaleCount = _.filter(people, {gender: 'Female'}).length;

alert(femaleCount);
console.log('module2 stuff');
