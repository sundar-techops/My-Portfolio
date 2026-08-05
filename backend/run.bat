@echo off
set "JAVA_HOME=C:\Program Files\Eclipse Adoptium\jdk-17.0.19.10-hotspot"
set "PATH=%JAVA_HOME%\bin;C:\apache-maven-3.9.16\bin;%PATH%"
cd /d "d:\My Portfolio Antigravity Project\backend"
echo Using Java: %JAVA_HOME%
java -version
echo.
echo Starting Spring Boot...
mvn spring-boot:run
