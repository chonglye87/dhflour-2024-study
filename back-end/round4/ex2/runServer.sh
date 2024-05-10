#!/bin/bash

# 현재 디렉토리에서 Encapsulation_Ex2.java 파일 컴파일
javac Encapsulation_Ex2.java

if [ $? -eq 0 ]; then
    echo "Compilation successful, starting server..."
    # 컴파일이 성공하면 서버 실행
    java Encapsulation_Ex2
else
    echo "Compilation failed, please check the Java source code."
fi
