#images with following resolutions and formats, put them in IMAGES_DIRECTORY
#####favicon.ico : 32x32
#####jitsilogo.png : 68x31
#####jitsilogo.png : 68x31
#####watermark.png : 612x272
#####logo-blue.svg : 210x297 mm

#sed find and replace format : sed -i 's/original/new/g' file.txt
#sed escaping characters (try this on terminal): $(echo $JITSI_ROOT | sed -e 's/\\/\\\\/g; s/\//\\\//g; s/&/\\\&/g')

#parameters
export APP_NAME="Meetrix" && \
export DESCRIPTION="Meetrix Collaboration Systems" && \
export JITSI_WATERMARK_LINK="https://meetrix.xyz" && \
export DEFAULT_REMOTE_DISPLAY_NAME="Fellow User" && \
#need to escape back slashes
export LIVE_STREAMING_HELP_LINK="https:\/\/meetrix.xyz\/live" && \
export IMAGES_DIRECTORY="/home/ubuntu/jitsi-images" && \
export JITSI_ROOT="/opt/jitsi-meet" && \
export DOMAIN_NAME="meet.meetrix.xyz" && \
export BACKUP_LOCATION=/home/ubuntu &&\

#clone jitsi repo
cd /opt && \
git clone https://github.com/jitsi/jitsi-meet.git &&\

#title.html
sed -i 's/Jitsi Meet/'"$APP_NAME"'/g' $JITSI_ROOT/title.html && \
sed -i 's/Join a WebRTC video conference powered by the Jitsi Videobridge/'"$DESCRIPTION"'/g' $JITSI_ROOT/title.html && \

#interfaceconfig.js
sed -i 's/Jitsi Meet/'"$APP_NAME"'/g' $JITSI_ROOT/interface_config.js && \
sed -i 's/Fellow Jitster/'"$DEFAULT_REMOTE_DISPLAY_NAME"'/g' $JITSI_ROOT/interface_config.js && \
sed -i 's/https:\/\/jitsi.org\/live/'"$LIVE_STREAMING_HELP_LINK"'/g' $JITSI_ROOT/interface_config.js && \

#nginx
#backup before editing
cp /etc/nginx/sites-enabled/$DOMAIN_NAME.conf $BACKUP_LOCATION
sed -i 's/\/usr\/share\/jitsi-meet/'$(echo $JITSI_ROOT | sed -e 's/\\/\\\\/g; s/\//\\\//g; s/&/\\\&/g')'/g' /etc/nginx/sites-enabled/$DOMAIN_NAME.conf &&\
sed -i 's/\/etc\/jitsi\/meet\/'"$DOMAIN_NAME-config.js"'/'$(echo $JITSI_ROOT/config.js | sed -e 's/\\/\\\\/g; s/\//\\\//g; s/&/\\\&/g')'/g' /etc/nginx/sites-enabled/$DOMAIN_NAME.conf &&\


#images and logos
cp $IMAGES_DIRECTORY/favicon.ico $JITSI_ROOT/favicon.ico && \
cp $IMAGES_DIRECTORY/* $JITSI_ROOT/images/ && \
cp /etc/jitsi/meet/$DOMAIN_NAME-config.js $JITSI_ROOT/config.js &&\

#install node lts and npm
npm install -g n && \
n lts && \
#install dependancies and make
cd $JITSI_ROOT && \
npm install && \
chmod 777 -R node_modules && \
make && \
service nginx restart

