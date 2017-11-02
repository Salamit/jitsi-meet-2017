#https://gist.github.com/SupuniNimeshika/f423978a9407cbf4a2569df167bbecf1
#need images with following resolutions and formats, put them in ANDROID_IMAGES_DIRECTORY
#####jitsilogo72.png : 72x72
#####jitsilogo48.png : 48x48
#####jitsilogo96.png : 96x96
#####jitsilogo144.png : 144x144
#####jitsilogo192.png : 192x192 mm


#parameters
export APP_ID="xyz.meetrix.meet"
export DEFAULT_URL="meet.meetrix.xyz"
export REACT_URL="meetrix.xyz"
export APP_NAME="Meetrix_meet"
export MYAPP_RELEASE_STORE_FILE="buddhika2.keystore"
export JITSI_ROOT="/media/supuni/Academic/siplo/jitsi-meet/CNOW9/jitsi-meet"
export SIGNING_DIRECTORY="/media/supuni/Academic/siplo/jitsi-meet/keystore"
export ANDROID_IMAGES_DIRECTORY="/media/supuni/Academic/siplo/jitsi-meet/android_logo"

#sed find and replace format : sed -i 's/original/new/g' file.txt
#build.gradle
sed -i 's/org.jitsi.meet/'"$APP_ID"'/g'  $JITSI_ROOT/android/app/build.gradle
#string.xml
sed -i 's/Jitsi Meet/'"$APP_NAME"'/g' $JITSI_ROOT/android/app/src/main/res/values/strings.xml
#AbstractApp.js
sed -i 's/meet.jit.si/'"$DEFAULT_URL"'/g' $JITSI_ROOT/react/features/app/components/AbstractApp.js
#WelcomePage.native.js
sed -i 's/jitsi.org/'"$REACT_URL"'/g' $JITSI_ROOT/react/features/welcome/components/WelcomePage.native.js
#AndroidManifest.xml
sed -i 's/org.jitsi.meet/'"$APP_ID"'/g' $JITSI_ROOT/android/app/src/main/AndroidManifest.xml
sed -i 's/meet.jit.si/'"$DEFAULT_URL"'/g' $JITSI_ROOT/android/app/src/main/AndroidManifest.xml

#there are more org.jitsi.meet in MainActivity.java ..sed -i '34s/AAA/BBB/' file_name
sed -i '17s/org.jitsi.meet/xyz.meetrix.meet/' $JITSI_ROOT/android/app/src/main/java/org/jitsi/meet/MainActivity.java

#set signing key file
cp $SIGNING_DIRECTORY/* $JITSI_ROOT/android/app/

#add signing configs

#sed -i '/CLIENTSCRIPT="foo"/a CLIENTSCRIPT2="hello"' file

sed -i '/minifyEnabled false/a signingConfig signingConfigs.release' $JITSI_ROOT/android/app/build.gradle

sed -i '28 a signingConfigs {' $JITSI_ROOT/android/app/build.gradle
sed -i '29 a release {' $JITSI_ROOT/android/app/build.gradle
sed -i '30 a  if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {' $JITSI_ROOT/android/app/build.gradle
sed -i '31 a storeFile file(MYAPP_RELEASE_STORE_FILE)' $JITSI_ROOT/android/app/build.gradle
sed -i '32 a storePassword MYAPP_RELEASE_STORE_PASSWORD' $JITSI_ROOT/android/app/build.gradle
sed -i '33 a keyAlias MYAPP_RELEASE_KEY_ALIAS' $JITSI_ROOT/android/app/build.gradle
sed -i '34 a keyPassword MYAPP_RELEASE_KEY_PASSWORD' $JITSI_ROOT/android/app/build.gradle
sed -i '35 a }' $JITSI_ROOT/android/app/build.gradle
sed -i '36 a }' $JITSI_ROOT/android/app/build.gradle
sed -i '37 a }' $JITSI_ROOT/android/app/build.gradle

#sed -i '/the specific line/i #this\n##is my\ntext' foo

#sed -i '/Line to insert after/ i Line one to insert \
#second new line to insert \
#third new line to insert' file

#sed '/buildTypes { /i\signingConfigs {\n
#	release {\n
#           if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) { \n
#                storeFile file(MYAPP_RELEASE_STORE_FILE) \n
#                storePassword MYAPP_RELEASE_STORE_PASSWORD \n
#                keyAlias MYAPP_RELEASE_KEY_ALIAS \n
#                keyPassword MYAPP_RELEASE_KEY_PASSWORD \n
#           } \n
#      } \n
# }'
# $JITSI_ROOT/android/app/build.gradle

#add key values of yours
#$ sed '$ a This is the last line' sedtest.txt
sed -i '$ a MYAPP_RELEASE_STORE_FILE=buddhika2.keystore' $JITSI_ROOT/android/gradle.properties
sed -i '$ a MYAPP_RELEASE_KEY_ALIAS=buddhika2' $JITSI_ROOT/android/gradle.properties
sed -i '$ a MYAPP_RELEASE_STORE_PASSWORD=123buddhika' $JITSI_ROOT/android/gradle.properties
sed -i '$ a MYAPP_RELEASE_KEY_PASSWORD=123buddhika' $JITSI_ROOT/android/gradle.properties

#images and logos
cp $ANDROID_IMAGES_DIRECTORY/favicon72.png $JITSI_ROOT/android/app/src/main/res/mipmap-hdpi/ic_launcher.png
cp $ANDROID_IMAGES_DIRECTORY/favicon48.png $JITSI_ROOT/android/app/src/main/res/mipmap-mdpi/ic_launcher.png
cp $ANDROID_IMAGES_DIRECTORY/favicon96.png $JITSI_ROOT/android/app/src/main/res/mipmap-xhdpi/ic_launcher.png
cp $ANDROID_IMAGES_DIRECTORY/favicon144.png $JITSI_ROOT/android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png
cp $ANDROID_IMAGES_DIRECTORY/favicon192.png $JITSI_ROOT/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png
