// Constants
const d = document
const url = 'https://api.unsplash.com/photos/?client_id='
const clientId = '6322e07de0e155ba0d9eca8d67cf27bb9b45417f2feb1a234baa363a1dda3dbe'
//* Should remove this in prod
const list = [{"id":"BDQRHYERE8M","created_at":"2017-05-26T13:49:31-04:00","updated_at":"2017-05-27T08:48:25-04:00","width":3872,"height":2592,"color":"#FEFFFF","likes":43,"liked_by_user":false,"user":{"id":"93Y16MG2SSc","updated_at":"2017-05-27T08:48:25-04:00","username":"leandrogandara","name":"Leandro Gándara Mendez","first_name":"Leandro","last_name":"Gándara Mendez","portfolio_url":null,"bio":"","location":"Pergamino, Buenos Aires, Argentina.","total_likes":14,"total_photos":1,"total_collections":0,"profile_image":{"small":"https://images.unsplash.com/profile-fb-1463889946-9a9438156294.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=ca6716076b2723d155ff4356f3b94085","medium":"https://images.unsplash.com/profile-fb-1463889946-9a9438156294.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=9630df5f60da0f74ef8a52a3e7105f3e","large":"https://images.unsplash.com/profile-fb-1463889946-9a9438156294.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=c1bd170e6581b568e6d3a0809f2f31ea"},"links":{"self":"https://api.unsplash.com/users/leandrogandara","html":"http://unsplash.com/@leandrogandara","photos":"https://api.unsplash.com/users/leandrogandara/photos","likes":"https://api.unsplash.com/users/leandrogandara/likes","portfolio":"https://api.unsplash.com/users/leandrogandara/portfolio","following":"https://api.unsplash.com/users/leandrogandara/following","followers":"https://api.unsplash.com/users/leandrogandara/followers"}},"current_user_collections":[],"urls":{"raw":"https://images.unsplash.com/photo-1495819001850-6c67d73d1b1e","full":"https://images.unsplash.com/photo-1495819001850-6c67d73d1b1e?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=9ed0243133a856f83d8ef1dde7ae5712","regular":"https://images.unsplash.com/photo-1495819001850-6c67d73d1b1e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=867df3a6b26f6e6705c52f0dc7ecb0b7","small":"https://images.unsplash.com/photo-1495819001850-6c67d73d1b1e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=cef6fd82cdd92721d2dee5f5c1abad87","thumb":"https://images.unsplash.com/photo-1495819001850-6c67d73d1b1e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=59913ec3fb1e2d3f7963219bb6ef413e"},"categories":[],"links":{"self":"https://api.unsplash.com/photos/BDQRHYERE8M","html":"http://unsplash.com/photos/BDQRHYERE8M","download":"http://unsplash.com/photos/BDQRHYERE8M/download","download_location":"https://api.unsplash.com/photos/BDQRHYERE8M/download"}},{"id":"0rZ2-QWtkwY","created_at":"2017-05-26T23:07:57-04:00","updated_at":"2017-05-27T08:29:30-04:00","width":5616,"height":3744,"color":"#25252D","likes":12,"liked_by_user":false,"user":{"id":"90bQwIjqoE8","updated_at":"2017-05-27T08:29:30-04:00","username":"baiqbilqis1","name":"Baiq Bilqis","first_name":"Baiq","last_name":"Bilqis","portfolio_url":null,"bio":"","location":null,"total_likes":1,"total_photos":1,"total_collections":0,"profile_image":{"small":"https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=0ad68f44c4725d5a3fda019bab9d3edc","medium":"https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=356bd4b76a3d4eb97d63f45b818dd358","large":"https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=ee8bbf5fb8d6e43aaaa238feae2fe90d"},"links":{"self":"https://api.unsplash.com/users/baiqbilqis1","html":"http://unsplash.com/@baiqbilqis1","photos":"https://api.unsplash.com/users/baiqbilqis1/photos","likes":"https://api.unsplash.com/users/baiqbilqis1/likes","portfolio":"https://api.unsplash.com/users/baiqbilqis1/portfolio","following":"https://api.unsplash.com/users/baiqbilqis1/following","followers":"https://api.unsplash.com/users/baiqbilqis1/followers"}},"current_user_collections":[],"urls":{"raw":"https://images.unsplash.com/photo-1495854245347-f3936493f799","full":"https://images.unsplash.com/photo-1495854245347-f3936493f799?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=28bb953e99dcd68d1d112d8ebe513a80","regular":"https://images.unsplash.com/photo-1495854245347-f3936493f799?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=d2874dbd1eb5a629402ad1d6a4520dbd","small":"https://images.unsplash.com/photo-1495854245347-f3936493f799?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=efce8fd070490990fc91d7d9727a88a5","thumb":"https://images.unsplash.com/photo-1495854245347-f3936493f799?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=03c37a894588cbc0b1c59a2e10439851"},"categories":[],"links":{"self":"https://api.unsplash.com/photos/0rZ2-QWtkwY","html":"http://unsplash.com/photos/0rZ2-QWtkwY","download":"http://unsplash.com/photos/0rZ2-QWtkwY/download","download_location":"https://api.unsplash.com/photos/0rZ2-QWtkwY/download"}},{"id":"eowVIQ2dIns","created_at":"2017-05-26T09:44:28-04:00","updated_at":"2017-05-27T08:33:23-04:00","width":5170,"height":3451,"color":"#E5E5E7","likes":10,"liked_by_user":false,"user":{"id":"oFmcHY0KOO0","updated_at":"2017-05-27T08:50:21-04:00","username":"marcojodoin","name":"Marc-Olivier Jodoin","first_name":"Marc-Olivier","last_name":"Jodoin","portfolio_url":"https://500px.com/marc-olivier-jodoin","bio":"","location":"Montréal/Ottawa","total_likes":406,"total_photos":31,"total_collections":0,"profile_image":{"small":"https://images.unsplash.com/profile-1493569923492-8fa8e4805672?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=797cba6ee3fbbf7408c0efacd8d4c12c","medium":"https://images.unsplash.com/profile-1493569923492-8fa8e4805672?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=e389a1a6c694e46cd9f8cb98dfd5dfdd","large":"https://images.unsplash.com/profile-1493569923492-8fa8e4805672?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=3ffe3f252304badcd3be2668bae79053"},"links":{"self":"https://api.unsplash.com/users/marcojodoin","html":"http://unsplash.com/@marcojodoin","photos":"https://api.unsplash.com/users/marcojodoin/photos","likes":"https://api.unsplash.com/users/marcojodoin/likes","portfolio":"https://api.unsplash.com/users/marcojodoin/portfolio","following":"https://api.unsplash.com/users/marcojodoin/following","followers":"https://api.unsplash.com/users/marcojodoin/followers"}},"current_user_collections":[],"urls":{"raw":"https://images.unsplash.com/photo-1495806213186-9cbc97bf3bda","full":"https://images.unsplash.com/photo-1495806213186-9cbc97bf3bda?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=9e1a439f98110e941019be348741ba38","regular":"https://images.unsplash.com/photo-1495806213186-9cbc97bf3bda?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=a72a8f666e0b1e5f919ad2d8f9195baa","small":"https://images.unsplash.com/photo-1495806213186-9cbc97bf3bda?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=4d6430268e78c338e331afc3ed5db547","thumb":"https://images.unsplash.com/photo-1495806213186-9cbc97bf3bda?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=e89ce7a39f60584a0c25bb06a1355fb9"},"categories":[],"links":{"self":"https://api.unsplash.com/photos/eowVIQ2dIns","html":"http://unsplash.com/photos/eowVIQ2dIns","download":"http://unsplash.com/photos/eowVIQ2dIns/download","download_location":"https://api.unsplash.com/photos/eowVIQ2dIns/download"}},{"id":"jLH4pYSCGA8","created_at":"2017-05-26T12:09:48-04:00","updated_at":"2017-05-27T08:36:08-04:00","width":3888,"height":2592,"color":"#F3E6E4","likes":9,"liked_by_user":false,"user":{"id":"92eIC3UjsSg","updated_at":"2017-05-27T08:47:23-04:00","username":"cipriann","name":"Ciocan Ciprian","first_name":"Ciocan","last_name":"Ciprian","portfolio_url":null,"bio":"C H I L D  O F  G O D\r\nsince 96'/Romania","location":"Gura-Humorului, Suceava","total_likes":1,"total_photos":11,"total_collections":3,"profile_image":{"small":"https://images.unsplash.com/profile-1492777825315-1e67867bbfd5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=ea6ab11987c45834a518be30c647f1a7","medium":"https://images.unsplash.com/profile-1492777825315-1e67867bbfd5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=069472e6798932769ede5d925f75ce37","large":"https://images.unsplash.com/profile-1492777825315-1e67867bbfd5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=1e343ea66a45833258e69e2a8b4f6a6b"},"links":{"self":"https://api.unsplash.com/users/cipriann","html":"http://unsplash.com/@cipriann","photos":"https://api.unsplash.com/users/cipriann/photos","likes":"https://api.unsplash.com/users/cipriann/likes","portfolio":"https://api.unsplash.com/users/cipriann/portfolio","following":"https://api.unsplash.com/users/cipriann/following","followers":"https://api.unsplash.com/users/cipriann/followers"}},"current_user_collections":[],"urls":{"raw":"https://images.unsplash.com/photo-1495814914670-43dc448ae910","full":"https://images.unsplash.com/photo-1495814914670-43dc448ae910?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=f667011db79faf38c99c36b9dcab90cb","regular":"https://images.unsplash.com/photo-1495814914670-43dc448ae910?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=165771d8fb4b9b03d997f9eef310ca73","small":"https://images.unsplash.com/photo-1495814914670-43dc448ae910?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=70912caaf2f52c8a9b0835a99a9aaa46","thumb":"https://images.unsplash.com/photo-1495814914670-43dc448ae910?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=6793b08e895457947299c71739d40691"},"categories":[],"links":{"self":"https://api.unsplash.com/photos/jLH4pYSCGA8","html":"http://unsplash.com/photos/jLH4pYSCGA8","download":"http://unsplash.com/photos/jLH4pYSCGA8/download","download_location":"https://api.unsplash.com/photos/jLH4pYSCGA8/download"}},{"id":"--i46xFw6GA","created_at":"2017-05-26T05:31:14-04:00","updated_at":"2017-05-27T07:58:47-04:00","width":7294,"height":4868,"color":"#011F1C","likes":4,"liked_by_user":false,"user":{"id":"ScGfk-8lW0M","updated_at":"2017-05-27T08:52:30-04:00","username":"rawpixel","name":"rawpixel.com","first_name":"rawpixel.com","last_name":null,"portfolio_url":"https://www.rawpixel.com/","bio":"Visit us for more model released photos, psd and vectors. Like what you see? Give us love by linking back to rawpixel.com","location":null,"total_likes":107,"total_photos":72,"total_collections":14,"profile_image":{"small":"https://images.unsplash.com/profile-1484640345877-9e950dc837d3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=8b4cfaf75814b9ac5bde84010516dac8","medium":"https://images.unsplash.com/profile-1484640345877-9e950dc837d3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=bb85513576e32b41ea16927b735cb95e","large":"https://images.unsplash.com/profile-1484640345877-9e950dc837d3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=eb49c7a62511747a20b83ad22f15b1be"},"links":{"self":"https://api.unsplash.com/users/rawpixel","html":"http://unsplash.com/@rawpixel","photos":"https://api.unsplash.com/users/rawpixel/photos","likes":"https://api.unsplash.com/users/rawpixel/likes","portfolio":"https://api.unsplash.com/users/rawpixel/portfolio","following":"https://api.unsplash.com/users/rawpixel/following","followers":"https://api.unsplash.com/users/rawpixel/followers"}},"current_user_collections":[],"urls":{"raw":"https://images.unsplash.com/photo-1495791054952-20dc36f9e2f9","full":"https://images.unsplash.com/photo-1495791054952-20dc36f9e2f9?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=5897e01fa1e798743fa71e5adf58b7dc","regular":"https://images.unsplash.com/photo-1495791054952-20dc36f9e2f9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=98bbcc682e8b381331c7a18910ae62fc","small":"https://images.unsplash.com/photo-1495791054952-20dc36f9e2f9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=12a037807cf8860884a294958bf6bbc1","thumb":"https://images.unsplash.com/photo-1495791054952-20dc36f9e2f9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=18cbe3b799fa8f6d7572fdb1afa75b04"},"categories":[],"links":{"self":"https://api.unsplash.com/photos/--i46xFw6GA","html":"http://unsplash.com/photos/--i46xFw6GA","download":"http://unsplash.com/photos/--i46xFw6GA/download","download_location":"https://api.unsplash.com/photos/--i46xFw6GA/download"}},{"id":"pTgMXg2WrHY","created_at":"2017-05-26T23:28:54-04:00","updated_at":"2017-05-27T08:29:22-04:00","width":5406,"height":3609,"color":"#EBE1E0","likes":16,"liked_by_user":false,"user":{"id":"UT41ainZxFI","updated_at":"2017-05-27T08:29:22-04:00","username":"nathananderson","name":"Nathan Anderson","first_name":"Nathan","last_name":"Anderson","portfolio_url":"https://nathanworking.com","bio":"Photos from me here. Photos from my grandfather there -> Unsplash.com/@lesanderson // Anderson@NathanWorking.com","location":"Knoxville, TN","total_likes":1285,"total_photos":417,"total_collections":6,"profile_image":{"small":"https://images.unsplash.com/profile-1487284800019-e4c8ea13fcc8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=d012cff0b11b698fde41d8558491a419","medium":"https://images.unsplash.com/profile-1487284800019-e4c8ea13fcc8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=4a3a843912a6748c26a96ac141d8a303","large":"https://images.unsplash.com/profile-1487284800019-e4c8ea13fcc8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=0fe6b168b805b32b6ad4cd580b97be0c"},"links":{"self":"https://api.unsplash.com/users/nathananderson","html":"http://unsplash.com/@nathananderson","photos":"https://api.unsplash.com/users/nathananderson/photos","likes":"https://api.unsplash.com/users/nathananderson/likes","portfolio":"https://api.unsplash.com/users/nathananderson/portfolio","following":"https://api.unsplash.com/users/nathananderson/following","followers":"https://api.unsplash.com/users/nathananderson/followers"}},"current_user_collections":[],"urls":{"raw":"https://images.unsplash.com/photo-1495855720902-bb60e936d7ca","full":"https://images.unsplash.com/photo-1495855720902-bb60e936d7ca?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=04331eabb01ebe2ad9baa5edf775222f","regular":"https://images.unsplash.com/photo-1495855720902-bb60e936d7ca?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=3ae02b3d4b29a8807948559e0c51aa88","small":"https://images.unsplash.com/photo-1495855720902-bb60e936d7ca?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=83710023faedf883289a650f6b115e22","thumb":"https://images.unsplash.com/photo-1495855720902-bb60e936d7ca?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=e3d78555e9a8c101d4041d7059ba947e"},"categories":[],"links":{"self":"https://api.unsplash.com/photos/pTgMXg2WrHY","html":"http://unsplash.com/photos/pTgMXg2WrHY","download":"http://unsplash.com/photos/pTgMXg2WrHY/download","download_location":"https://api.unsplash.com/photos/pTgMXg2WrHY/download"}},{"id":"gRV4TG2XNdw","created_at":"2017-05-26T16:05:13-04:00","updated_at":"2017-05-27T08:29:29-04:00","width":3448,"height":4592,"color":"#26211D","likes":15,"liked_by_user":false,"user":{"id":"9IrwW9lPEE4","updated_at":"2017-05-27T08:29:29-04:00","username":"mackwandex","name":"Mack Wandex","first_name":"Mack","last_name":"Wandex","portfolio_url":null,"bio":"","location":null,"total_likes":5,"total_photos":7,"total_collections":0,"profile_image":{"small":"https://images.unsplash.com/profile-1486303444056-69a1cce49487?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=f366ea8bf6f5e2f45283a574e058a826","medium":"https://images.unsplash.com/profile-1486303444056-69a1cce49487?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=4648fa1f33aa9d591d798af88ca306e7","large":"https://images.unsplash.com/profile-1486303444056-69a1cce49487?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=36dfb5f012a771901b0dcb2a6cadaf32"},"links":{"self":"https://api.unsplash.com/users/mackwandex","html":"http://unsplash.com/@mackwandex","photos":"https://api.unsplash.com/users/mackwandex/photos","likes":"https://api.unsplash.com/users/mackwandex/likes","portfolio":"https://api.unsplash.com/users/mackwandex/portfolio","following":"https://api.unsplash.com/users/mackwandex/following","followers":"https://api.unsplash.com/users/mackwandex/followers"}},"current_user_collections":[],"urls":{"raw":"https://images.unsplash.com/photo-1495829043813-a986e6bd1d7b","full":"https://images.unsplash.com/photo-1495829043813-a986e6bd1d7b?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=e8a36a05686f145edd29edc4ac02d1bd","regular":"https://images.unsplash.com/photo-1495829043813-a986e6bd1d7b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=1bd5a0e841374de5e05df61d40c57c3b","small":"https://images.unsplash.com/photo-1495829043813-a986e6bd1d7b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=b4ed81e80edea28a21d15969e3a81ede","thumb":"https://images.unsplash.com/photo-1495829043813-a986e6bd1d7b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=8db1654750ba8d40fabe2826ca81835c"},"categories":[],"links":{"self":"https://api.unsplash.com/photos/gRV4TG2XNdw","html":"http://unsplash.com/photos/gRV4TG2XNdw","download":"http://unsplash.com/photos/gRV4TG2XNdw/download","download_location":"https://api.unsplash.com/photos/gRV4TG2XNdw/download"}},{"id":"13MzGKuJYSw","created_at":"2017-05-27T03:35:27-04:00","updated_at":"2017-05-27T08:49:55-04:00","width":2633,"height":4231,"color":"#D0C4C1","likes":26,"liked_by_user":false,"user":{"id":"e_SE6arhZQo","updated_at":"2017-05-27T08:49:55-04:00","username":"claudiasoraya","name":"Claudia Soraya","first_name":"Claudia","last_name":"Soraya","portfolio_url":null,"bio":"","location":null,"total_likes":0,"total_photos":3,"total_collections":0,"profile_image":{"small":"https://images.unsplash.com/profile-fb-1495868712-f6e05a39f3bd.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=0000ad954c739ed9f42cb86188567e33","medium":"https://images.unsplash.com/profile-fb-1495868712-f6e05a39f3bd.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=3ff1c1f2d1e793b3b448030e7a03a281","large":"https://images.unsplash.com/profile-fb-1495868712-f6e05a39f3bd.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=83916d12afc180d75dd012e5c54ec351"},"links":{"self":"https://api.unsplash.com/users/claudiasoraya","html":"http://unsplash.com/@claudiasoraya","photos":"https://api.unsplash.com/users/claudiasoraya/photos","likes":"https://api.unsplash.com/users/claudiasoraya/likes","portfolio":"https://api.unsplash.com/users/claudiasoraya/portfolio","following":"https://api.unsplash.com/users/claudiasoraya/following","followers":"https://api.unsplash.com/users/claudiasoraya/followers"}},"current_user_collections":[],"urls":{"raw":"https://images.unsplash.com/photo-1495870043034-74e1a009f631","full":"https://images.unsplash.com/photo-1495870043034-74e1a009f631?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=65254441cbd1df81bde8d9bd590a7f21","regular":"https://images.unsplash.com/photo-1495870043034-74e1a009f631?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=9507ab5ded63adf0689228c10636a46c","small":"https://images.unsplash.com/photo-1495870043034-74e1a009f631?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=893cbe86436e4ecea09dbe4e6070a6d0","thumb":"https://images.unsplash.com/photo-1495870043034-74e1a009f631?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=e264f43a20ff45ce55e633ea591b4a57"},"categories":[],"links":{"self":"https://api.unsplash.com/photos/13MzGKuJYSw","html":"http://unsplash.com/photos/13MzGKuJYSw","download":"http://unsplash.com/photos/13MzGKuJYSw/download","download_location":"https://api.unsplash.com/photos/13MzGKuJYSw/download"}},{"id":"umLlSREhfp0","created_at":"2017-05-26T23:45:00-04:00","updated_at":"2017-05-27T08:29:38-04:00","width":5184,"height":3456,"color":"#EAEEF3","likes":8,"liked_by_user":false,"user":{"id":"K6k5pnsyd1o","updated_at":"2017-05-27T08:30:39-04:00","username":"bradleyziffer","name":"Bradley Ziffer","first_name":"Bradley","last_name":"Ziffer","portfolio_url":null,"bio":"UX and Product Designer. I work for a digital agency called Hotleads. Discover, Create, and Inspire. Also, I love photography. It just makes me smile :)","location":"Philadelphia, PA","total_likes":8,"total_photos":7,"total_collections":0,"profile_image":{"small":"https://images.unsplash.com/profile-1495435349256-c58c0c2e02aa?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=5cd445198b057729b528e2c9e864e4d8","medium":"https://images.unsplash.com/profile-1495435349256-c58c0c2e02aa?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=eba7f94fa98b64e9cebf69b4d2f4e5a2","large":"https://images.unsplash.com/profile-1495435349256-c58c0c2e02aa?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=24e2f7265b1c5aa499bedcb9f2eae690"},"links":{"self":"https://api.unsplash.com/users/bradleyziffer","html":"http://unsplash.com/@bradleyziffer","photos":"https://api.unsplash.com/users/bradleyziffer/photos","likes":"https://api.unsplash.com/users/bradleyziffer/likes","portfolio":"https://api.unsplash.com/users/bradleyziffer/portfolio","following":"https://api.unsplash.com/users/bradleyziffer/following","followers":"https://api.unsplash.com/users/bradleyziffer/followers"}},"current_user_collections":[],"urls":{"raw":"https://images.unsplash.com/photo-1495856458515-0637185db551","full":"https://images.unsplash.com/photo-1495856458515-0637185db551?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=71ee5fdb562a6cdb52dde80987098e27","regular":"https://images.unsplash.com/photo-1495856458515-0637185db551?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=f4d09ed3dcbe9ccdecba8a1c67123b74","small":"https://images.unsplash.com/photo-1495856458515-0637185db551?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=3320083d4cba93a8cd89d24bae88e25d","thumb":"https://images.unsplash.com/photo-1495856458515-0637185db551?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=fe722fefc88831aece6bdc3767d12851"},"categories":[],"links":{"self":"https://api.unsplash.com/photos/umLlSREhfp0","html":"http://unsplash.com/photos/umLlSREhfp0","download":"http://unsplash.com/photos/umLlSREhfp0/download","download_location":"https://api.unsplash.com/photos/umLlSREhfp0/download"}},{"id":"fWszj6bErYk","created_at":"2017-05-26T20:26:48-04:00","updated_at":"2017-05-27T08:29:34-04:00","width":6016,"height":4016,"color":"#F5F1EB","likes":7,"liked_by_user":false,"user":{"id":"hdPfbgARw_E","updated_at":"2017-05-27T08:29:34-04:00","username":"hannahcauhepe","name":"hannah cauhepe","first_name":"hannah","last_name":"cauhepe","portfolio_url":null,"bio":"","location":null,"total_likes":0,"total_photos":8,"total_collections":0,"profile_image":{"small":"https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=0ad68f44c4725d5a3fda019bab9d3edc","medium":"https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=356bd4b76a3d4eb97d63f45b818dd358","large":"https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=ee8bbf5fb8d6e43aaaa238feae2fe90d"},"links":{"self":"https://api.unsplash.com/users/hannahcauhepe","html":"http://unsplash.com/@hannahcauhepe","photos":"https://api.unsplash.com/users/hannahcauhepe/photos","likes":"https://api.unsplash.com/users/hannahcauhepe/likes","portfolio":"https://api.unsplash.com/users/hannahcauhepe/portfolio","following":"https://api.unsplash.com/users/hannahcauhepe/following","followers":"https://api.unsplash.com/users/hannahcauhepe/followers"}},"current_user_collections":[],"urls":{"raw":"https://images.unsplash.com/photo-1495844311468-59f49389020a","full":"https://images.unsplash.com/photo-1495844311468-59f49389020a?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=a8e2d12b8f31505db51929ef0f701dd9","regular":"https://images.unsplash.com/photo-1495844311468-59f49389020a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=0df12ab9f93d6d651cd3d91949fe73c5","small":"https://images.unsplash.com/photo-1495844311468-59f49389020a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=fec6874cc283653e0d76de705f2c7e5c","thumb":"https://images.unsplash.com/photo-1495844311468-59f49389020a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=bfb24fdfbf1541d10ff8907382e8e6e4"},"categories":[],"links":{"self":"https://api.unsplash.com/photos/fWszj6bErYk","html":"http://unsplash.com/photos/fWszj6bErYk","download":"http://unsplash.com/photos/fWszj6bErYk/download","download_location":"https://api.unsplash.com/photos/fWszj6bErYk/download"}}]


// Model
const initialState = {
  list: [],
  currentImage: 0,
  nextImage: 1
}

const createStore = function createStoreFn (reducer) {
  var state = undefined
  var subscribers = []

  return {
    dispatch: function (action) {
      state = reducer(state, action)
      subscribers.forEach(function (handle) {
        return handle(state, action)
      })
    },
    getState: function () {
      return state
    },
    subscribe: function (handler) {
      subscribers.push(handler)
    }
  }
}

const reducer = function reducerFn (state, action) {
  if (state == null) {
    state = initialState
  }

  switch (action.type) {
    case 'ON_NEW_IMAGES': {
      return Object.assign(state, {
        list: action.payload.list
      })
    }

    case 'ON_NEXT_IMAGE': {
      return Object.assign(state, {
        currentImage: state.nextImage,
        nextImage: state.nextImage + 1
      })
    }

    default:
      return state
  }
}

const store = createStore(reducer)

// View
function Node (elem, attrs) {
  const node = d.createElement(elem)
  Object.keys(attrs).forEach(function (key) {
    node.setAttribute(key, attrs[key])
  })

  return node
}

store.subscribe(function (state, action) {
  const root = d.querySelector('#root')

  switch (action.type) {
    case 'ON_WINDOW_LOAD': {
      const xml = new XMLHttpRequest();

      //xml.addEventListener('load', function () {
      //    store.dispatch({
      //      type: 'ON_NEW_IMAGES',
      //      payload: { list: JSON.parse(this.responseText) }
      //    })
      //  }
      //);
      //xml.open('GET', url + clientId);
      //xml.send();

      break
    }

    case 'ON_NEW_IMAGES': {
      const list = state.list
      const id = state.currentImage
      const nextId = state.nextImage

      const currentImage = Node('img', {
        id: id,
        src: list[id].urls.small,
        style: 'width: 100%'
      })

      const nextImage = Node('img', {
        id: nextId,
        src: list[nextId].urls.small,
        style: 'width: 100%; display: none'
      })

      root.appendChild(currentImage)
      root.appendChild(nextImage)

      break
    }

    case 'ON_SPACE_BAR': {
      store.dispatch({ type: 'ON_NEXT_IMAGE' })

      const list = state.list
      const nextId = state.nextImage

      const images = root.querySelectorAll('img')
      const prevImage = images[0]
      const currentImage = images[1]
      const nextImage = Node('img', {
        id: nextId,
        src: list[nextId].urls.small,
        style: 'width: 100%; display: none'
      })

      root.removeChild(prevImage)
      currentImage.setAttribute('style', 'width: 100%;')
      root.appendChild(nextImage)

      break
    }
  }
})

// Events
const body = d.querySelector('body')

window.addEventListener('load', function () {
  store.dispatch({
    type: 'ON_WINDOW_LOAD'
  })
})

//* Should not be in production.
body.addEventListener('click', function () {
  store.dispatch({
    type: 'ON_NEW_IMAGES',
    payload: {
      list: list
    }
  })
})

body.addEventListener('keyup', function (e) {
  if (e.keyCode === 32) {
    store.dispatch({
      type: 'ON_SPACE_BAR'
    })
  }
})
