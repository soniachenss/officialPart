//包装函数
module.exports = function (grunt) {

    //任务配置，所以插件的配置信息
    grunt.initConfig({
        //获取package.json的信息
        pkg:grunt.file.readJSON('package.json'),

        // Metadata.
        meta: {
            basePath: '../',
            srcPath: '../assets/sass/',
            deployPath: '../assets/css/'
        },

        //sass编译插件
        sass:{
            dist:{
                files:{
                    'src/test.css': 'src/test.scss'
                },
                options:{
                    style: 'expanded'
                }
            }
        },

        less: {
            task1:{
                options: {
                    compress: false,
                    yuicompress: false
                },
                files: {
                    "src/css/index-main.css": "src/less/index-main.less",
                }
            }
            ,
            task2:{
                options: {
                    compress: false,
                    yuicompress: false
                },
                files: {
                    "src/css/index-class.css": "src/less/index-class.less",
                }
            }
            ,
            task3:{
                options: {
                    compress: false,
                    yuicompress: false
                },
                files: {
                    "src/css/official_about.css": "src/less/official_about.less",
                }
            }
            ,
            task4:{
                options: {
                    compress: false,
                    yuicompress: false
                },
                files: {
                    "src/css/sidebar.css": "src/less/sidebar.less",
                }
            }
            ,
            task5:{
                options: {
                    compress: false,
                    yuicompress: false
                },
                files: {
                    "src/css/officialVIP.css": "src/less/officialVIP.less",
                }
            }
        },

        //uglify（js代码压缩插件）的配置信息
        uglify: {
            //文件头部输出信息
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            my_target: {
                files: [
                    {
                        expand: true,
                        //相对路径
                        cwd: 'src/',
                        src: '*.js',
                        dest: 'build/js/',
                        rename: function (dest, src) {
                            var folder = src.substring(0, src.lastIndexOf('/'));
                            var filename = src.substring(src.lastIndexOf('/'), src.length);
                            //  var filename=src;
                            filename = filename.substring(0, filename.lastIndexOf('.'));
                            var fileresult=dest + folder + filename + '.min.js';
                            grunt.log.writeln("现处理文件："+src+"  处理后文件："+fileresult);
                            return fileresult;
                            //return  filename + '.min.js';
                        }
                    }
                ]
            }
        },

        //压缩css
        cssmin: {
            //文件头部输出信息
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                //美化代码
                beautify: {
                    //中文ascii化，非常有用！防止中文乱码的神配置
                    ascii_only: true
                }
            },
            my_target: {
                files: [
                    {
                        expand: true,
                        //相对路径
                        cwd: 'src/css/',
                        src: '*.css',
                        dest: 'build/css/',
                        rename: function (dest, src) {
                            var folder = src.substring(0, src.lastIndexOf('/'));
                            var filename = src.substring(src.lastIndexOf('/'), src.length);
                            //  var filename=src;
                            filename = filename.substring(0, filename.lastIndexOf('.'));
                            var fileresult=dest + folder + filename + '.min.css';
                            grunt.log.writeln("现处理文件："+src+"  处理后文件："+fileresult);
                            return fileresult;
                            //return  filename + '.min.js';
                        }
                    }
                ]
            }
        },

        //css语法错误检查
        csslint:{
            build:['Gruntfile.js','scr/css/*.css'],
            options:{
                csslintrc:'.csslintrc'
            }
        },

        //js语法错误检查
        jshint:{
            build:['Gruntfile.js','src/*.js'],
            options:{
                jshintrc:'.jshintrc'
            }
        },

        //watch插件配置信息,启动后实时监听，实现自动化
        watch:{
            build:{
                files:['src/less/*.less'],
//                tasks:['jshint','uglify'],
                tasks:['less'],
                options:{spawn:false}
            }
        },

        // 访问本地静态mock数据
        mock2easy: {
            test: {
                options: {
                    port: 3000,
                    lazyLoadTime:3000,
                    database: 'database',
                    keepAlive: false,
                    ignoreField: ['__preventCache', 'secToken'],
                    interfaceSuffix:'.json',
                    curl: {
                        domain: 'http://hello.console.demo.com',
                        parameter: {
                            secToken: 'jimZPPU1MZtLmjFXnxCl22'
                        },
                        Cookie: 'kRm9JWrHB9%2B%2Bq84dcf4tLAUfECcVq5NknX2Rs9ic'
                    }
                }
            }
        },
    });

    //告诉grunt我们将使用的插件
    grunt.loadNpmTasks("grunt-contrib-csslint");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-mock2easy');
    

    //告诉grunt当我们在终端输入grunt时需要做些什么(注意先后顺序）
    //grunt.registerTask('default',['jshint','uglify','less','cssmin','mock2easy','watch']);
    grunt.registerTask('default',['less','watch']);
};