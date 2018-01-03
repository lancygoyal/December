echo \"MongoDB Starting\"

# unameOut="$(uname -s)"
# case "${unameOut}" in
#     Linux*)     machine=Linux;;
#     Darwin*)    machine=Mac;;
#     CYGWIN*)    machine=Cygwin;;
#     MINGW*)     machine=MinGw;;
#     *)          machine="UNKNOWN:${unameOut}"
# esac
# echo ${machine}

if [ "$(uname)" == "Darwin" ]; then
    # Do something under Mac OS X platform
    mongod
elif [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then
    # Do something under GNU/Linux platform
    mongod
elif [ "$(expr substr $(uname -s) 1 10)" == "MINGW32_NT" ]; then
    # Do something under 32 bits Windows NT platform
    "C:\Program Files\MongoDB\Server\3.2\bin\mongod" --dbpath="C:\DB"
elif [ "$(expr substr $(uname -s) 1 10)" == "MINGW64_NT" ]; then
    # Do something under 64 bits Windows NT platform
    "C:\Program Files\MongoDB\Server\3.2\bin\mongod" --dbpath="C:\DB"
fi

