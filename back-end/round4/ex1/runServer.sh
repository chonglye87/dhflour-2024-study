#!/bin/bash

javac ClassObject_Ex1.java

if [ $? -eq 0 ]; then
    echo "Compilation successful, starting server..."
    # 컴파일이 성공하면 서버 실행
    java ClassObject_Ex1
else
    echo "Compilation failed, please check the Java source code."
fi
