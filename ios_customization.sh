#https://gist.github.com/SupuniNimeshika/a898e4baa257bb4d76df8fde72d0a2d5

#images with following resolutions and formats, put them in IOS_IMAGES_DIRECTORY
#####AppIcon-29@2x.png : 58x58
#####AppIcon-29@3x.png : 87x87
#####AppIcon-40@2x.png : 80x80
#####AppIcon-60@2x.png : 120x120
#####AppIcon-60@3x.png : 180x180
#####AppIcon-76@1x.png : 76x76
#####AppIcon-76@2x.png : 152x152
#####AppIcon-83.5@2x.png : 167x167

#parameters

export JITSI_ROOT="/media/supuni/Academic/siplo/jitsi-meet/sabil/jitsi-meet"
export IOS_IMAGES_DIRECTORY="/media/supuni/Academic/siplo/jitsi-meet/ios_images_sabil"


#images and logos
cp $IOS_IMAGES_DIRECTORY/AppIcon-29@2x.png $JITSI_ROOT/ios/app/src/Images.xcassets/AppIcon.appiconset/AppIcon-29@2x.png

cp $IOS_IMAGES_DIRECTORY/AppIcon-29@3x.png $JITSI_ROOT/ios/app/src/Images.xcassets/AppIcon.appiconset/AppIcon-29@3x.png

cp $IOS_IMAGES_DIRECTORY/AppIcon-40@2x.png $JITSI_ROOT/ios/app/src/Images.xcassets/AppIcon.appiconset/AppIcon-40@2x.png

cp $IOS_IMAGES_DIRECTORY/AppIcon-60@2x.png $JITSI_ROOT/ios/app/src/Images.xcassets/AppIcon.appiconset/AppIcon-60@2x.png

cp $IOS_IMAGES_DIRECTORY/AppIcon-60@3x.png $JITSI_ROOT/ios/app/src/Images.xcassets/AppIcon.appiconset/AppIcon-60@3x.png

cp $IOS_IMAGES_DIRECTORY/AppIcon-76@1x.png $JITSI_ROOT/ios/app/src/Images.xcassets/AppIcon.appiconset/AppIcon-76@1x.png

cp $IOS_IMAGES_DIRECTORY/AppIcon-76@2x.png $JITSI_ROOT/ios/app/src/Images.xcassets/AppIcon.appiconset/AppIcon-76@2x.png

cp $IOS_IMAGES_DIRECTORY/AppIcon-83.5@2x.png $JITSI_ROOT/ios/app/src/Images.xcassets/AppIcon.appiconset/AppIcon-83.5@2x.png

#launch Screen

cp $IOS_IMAGES_DIRECTORY/LaunchScreen-480@1x.png $JITSI_ROOT/ios/app/src/Images.xcassets/LaunchScreen.imageset/LaunchScreen-480@1x.png

cp $IOS_IMAGES_DIRECTORY/LaunchScreen-480@2x.png $JITSI_ROOT/ios/app/src/Images.xcassets/LaunchScreen.imageset/LaunchScreen-480@2x.png

cp $IOS_IMAGES_DIRECTORY/LaunchScreen-480@3x.png $JITSI_ROOT/ios/app/src/Images.xcassets/LaunchScreen.imageset/LaunchScreen-480@3x.png
