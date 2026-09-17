# 大学物理笔记

## 一、运动学与牛顿定律

### 1. 位置、速度、加速度

$$
\boldsymbol v=\frac{d\boldsymbol r}{dt},\qquad
\boldsymbol a=\frac{d\boldsymbol v}{dt}.
$$

速度变化既包括大小变化，也包括方向变化。匀速圆周运动的速率不变，但加速度不为零。

直线匀加速运动：

$$
v=v_0+at,\qquad x-x_0=v_0t+\frac12at^2,
$$

$$
v^2-v_0^2=2a(x-x_0).
$$

这些式子要求加速度恒定。变加速问题回到微分、积分关系；一维运动在合适的可微条件下还可用 $a=v\,dv/dx$。

曲线运动的切向和法向加速度：

$$
a_t=\frac{dv}{dt},\qquad a_n=\frac{v^2}{\rho}.
$$

$\rho$ 是轨迹的曲率半径，法向指向曲率中心。圆周运动时 $\rho=R$，且 $v=\omega R$、$a_t=\alpha R$、$a_n=\omega^2R$。

### 2. 受力分析

惯性系中，质量不变的质点满足

$$
\sum\boldsymbol F=m\boldsymbol a.
$$

常见力：重力、支持力、拉力、弹簧力、摩擦力。向心力不是一种额外的力，而是合力沿法向的分量。

摩擦力要区分：

$$
|f_s|\le\mu_sN,\qquad |f_k|=\mu_kN.
$$

静摩擦力会按运动约束调整，只有达到临界滑动状态时才取最大值。摩擦力方向应根据相对滑动或相对滑动趋势判断，不一定与物体相对地面的速度相反。

例：物块沿倾角为 $\theta$ 的粗糙斜面向下滑，取沿斜面向下为正，忽略其他力：

$$
mg\sin\theta-\mu_kmg\cos\theta=ma,
$$

$$
a=g(\sin\theta-\mu_k\cos\theta).
$$

若算出 $a<0$，说明当前下滑过程在减速；不能据此直接说物块已经向上运动。停止后的状态需要重新判断静摩擦。

### 3. 非惯性系

在相对惯性系以加速度 $\boldsymbol a_0$ 作平动的参考系中，可以引入惯性力 $-m\boldsymbol a_0$，再写相对运动方程。旋转参考系还涉及离心惯性力、科里奥利力等。

不要把在不同参考系写出的速度、加速度和受力方程混在一起。

## 二、功、能量与动量

### 1. 功与动能

$$
W=\int_C\boldsymbol F\cdot d\boldsymbol r,\qquad
P=\boldsymbol F\cdot\boldsymbol v,
$$

$$
W_{\text{合}}=\Delta E_k,\qquad E_k=\frac12mv^2.
$$

功可以为负，表示该力的作用使动能减少。力始终与瞬时速度垂直时不做功，但可能改变运动方向。

保守力做功与路径无关，可定义势能：

$$
\boldsymbol F=-\nabla U,\qquad W_c=-\Delta U.
$$

常用势能：近地面 $U=mgh$；理想弹簧 $U=\frac12kx^2$；以无穷远为零点时，引力势能 $U=-GMm/r$。

势能零点可选，势能差不随零点选择改变。机械能关系：

$$
\Delta(E_k+U)=W_{\text{非保守力}}.
$$

在适当选定系统、外界不输入机械能且非保守力净功为零时，机械能守恒。摩擦产生内能不意味着总能量消失。

### 2. 冲量、动量与碰撞

$$
\boldsymbol p=m\boldsymbol v,\qquad
\boldsymbol J=\int\boldsymbol F\,dt=\Delta\boldsymbol p.
$$

系统总动量的变化由外力冲量决定。外力合力为零则总动量守恒；短时碰撞中若外力冲量远小于内力冲量，也常可近似按动量守恒处理。

动量是矢量，可以某个方向守恒、其他方向不守恒。

碰撞分类：

- 完全弹性碰撞：系统动量、总动能均守恒。
- 非弹性碰撞：动量在相应条件下守恒，总动能减少。
- 完全非弹性碰撞：碰后粘在一起，具有共同速度。

一维完全非弹性碰撞：

$$
v=\frac{m_1v_1+m_2v_2}{m_1+m_2}.
$$

两物体分别以速度 $v_1,v_2$ 碰撞时，损失的动能为

$$
\Delta E_{k,\text{损失}}
=\frac12\frac{m_1m_2}{m_1+m_2}(v_1-v_2)^2.
$$

例：质量同为 $m$ 的两物体，一个速度为 $v_0$，另一个静止，粘合后速度为 $v_0/2$，动能损失为初动能的一半。

## 三、刚体转动

### 1. 转动惯量

$$
I=\int r_\perp^2\,dm.
$$

它取决于质量分布和转轴位置。同一个物体换一根轴，转动惯量通常就变了。

| 物体与转轴               | 转动惯量         |
| ------------------------ | ---------------- |
| 薄圆环，过中心且垂直环面 | $MR^2$           |
| 均匀圆盘，中心对称轴     | $\frac12MR^2$    |
| 均匀细杆，过中心且垂直杆 | $\frac1{12}ML^2$ |
| 均匀细杆，过端点且垂直杆 | $\frac13ML^2$    |
| 均匀实心球，过球心       | $\frac25MR^2$    |

平行轴定理：$I=I_C+Md^2$。其中一根轴必须经过质心，两轴平行，间距为 $d$。

### 2. 转动定律与角动量

刚体绕固定轴转动、转动惯量不变时：

$$
\tau_{\text{轴}}=I\alpha,\qquad E_{k,\text{转}}=\frac12I\omega^2.
$$

对惯性系中固定原点，系统外力矩满足

$$
\boldsymbol\tau_{\text{外}}=\frac{d\boldsymbol L}{dt}.
$$

外力矩为零则角动量守恒。固定轴问题中可用 $L_{\text{轴}}=I\omega$；一般三维刚体的角动量未必与角速度平行，不能一概写成标量乘法。

### 3. 纯滚动

刚体在静止平面上无滑动滚动：

$$
v_C=\omega R,\qquad
E_k=\frac12Mv_C^2+\frac12I_C\omega^2.
$$

接触点瞬时速度为零，但加速度不一定为零。

例：均匀实心圆柱从高度差 $h$ 处由静止纯滚动下滑，忽略耗散：

$$
Mgh=\frac12Mv^2+\frac12\left(\frac12MR^2\right)\frac{v^2}{R^2},
\qquad v=\sqrt{\frac{4gh}{3}}.
$$

这一结果以静摩擦足以保证不滑动为前提。理想静止刚性表面上的纯滚动中，接触处静摩擦可以改变平动和转动能量的分配，而不对刚体做净功。

## 四、振动与波

### 1. 简谐振动

$$
x=A\cos(\omega t+\varphi),\quad
v=-A\omega\sin(\omega t+\varphi),\quad
a=-\omega^2x.
$$

$$
T=\frac{2\pi}{\omega},\qquad f=\frac1T.
$$

理想弹簧振子：$\omega=\sqrt{k/m}$。小角度单摆：$\omega=\sqrt{g/\ell}$，这里需要摆角足够小，才能用 $\sin\theta\approx\theta$。

弹簧振子的总能量：

$$
E=\frac12kA^2=\frac12mv^2+\frac12kx^2.
$$

根据初始位移和初始速度求相位时，要同时满足余弦和正弦的符号，不能只算一个反三角函数就结束。

### 2. 阻尼与受迫振动

线性黏性阻尼模型：

$$
m\ddot x+b\dot x+kx=F_0\cos\Omega t.
$$

无外驱动时，按阻尼大小可分欠阻尼、临界阻尼和过阻尼。受迫振动的稳态频率等于驱动力频率，位移幅值为

$$
A(\Omega)=\frac{F_0}{\sqrt{(k-m\Omega^2)^2+b^2\Omega^2}}.
$$

有阻尼时，位移振幅峰值的频率一般不严格等于无阻尼固有频率 $\sqrt{k/m}$；只有在弱阻尼条件下才很接近。

### 3. 行波、干涉与驻波

沿正 $x$ 方向传播的简谐波可写为

$$
y(x,t)=A\cos(\omega t-kx+\varphi),
$$

$$
k=\frac{2\pi}{\lambda},\qquad u=\frac\omega k=\lambda f.
$$

固定相位满足 $\omega t-kx=\text{常数}$，所以相位位置随时间向正 $x$ 方向移动。波速 $u$ 与介质质点的振动速度 $\partial y/\partial t$ 是两件事。

两列同频、同方向振动的相干波在某点叠加：

$$
A_{\text{合}}^2=A_1^2+A_2^2+2A_1A_2\cos\Delta\varphi.
$$

同相加强，反相减弱。相位差既可能来自波程差，也可能来自波源初相位差或反射引起的相位变化。

等振幅、同频率、反向传播的波叠加可形成驻波，例如

$$
y=2A\cos kx\cos\omega t.
$$

相邻波节间距 $\lambda/2$，波节与相邻波腹间距 $\lambda/4$。理想驻波没有净平均能量流。

两端固定、长度为 $L$ 的理想弦：$\lambda_n=2L/n$，$f_n=nu/(2L)$，$n=1,2,\ldots$。

## 五、气体动理论与热力学

### 1. 理想气体

$$
pV=\nu RT=Nk_BT.
$$

$\nu$ 为物质的量，$N$ 为分子数，$R=N_Ak_B$。温度必须用开尔文。

理想气体分子的平均平动动能：

$$
\overline{\varepsilon_{\text{平}}}=\frac32k_BT,
\qquad v_{\mathrm{rms}}=\sqrt{\frac{3k_BT}{m}}.
$$

方均根速率不是平均速率。温度相同表示平均平动动能相同，不表示不同质量分子的速率相同。

经典能量均分成立且有效自由度固定时：

$$
U=\frac f2\nu RT,\qquad C_{V,m}=\frac f2R,\qquad C_{P,m}-C_{V,m}=R.
$$

$f$ 是参与热运动的二次型自由度数。单原子理想气体通常取 $f=3$；分子振动、转动是否被激发与温度有关，不能任何温度都用同一个自由度数。

### 2. 热力学第一定律

本笔记规定：$Q>0$ 为系统吸热，$W>0$ 为系统对外做功。

$$
\Delta U=Q-W.
$$

准静态膨胀功为 $W=\int p\,dV$；更一般地，边界功需按外界阻力对应的外压计算，不能随意使用系统内部某个不均匀压强。

| 过程       | 关键条件 | 理想气体的常用结论                             |
| ---------- | -------- | ---------------------------------------------- |
| 等容       | $V$ 不变 | $W=0,\ Q=\Delta U$                             |
| 等压准静态 | $p$ 不变 | $W=p\Delta V=\nu R\Delta T$                    |
| 等温       | $T$ 不变 | $\Delta U=0$；可逆时 $W=\nu RT\ln(V_2/V_1)$    |
| 绝热       | $Q=0$    | $\Delta U=-W$                                  |
| 循环       | 回到初态 | $\Delta U=0,\ Q_{\mathrm{净}}=W_{\mathrm{净}}$ |

可逆绝热理想气体过程，且热容近似不随温度变化时：

$$
pV^\gamma=\text{常数},\qquad TV^{\gamma-1}=\text{常数},
\qquad\gamma=\frac{C_{P,m}}{C_{V,m}}.
$$

“绝热”不自动等于“可逆绝热”。例如向真空自由膨胀，理想气体可在 $Q=W=0$ 时保持温度不变，但不能套用上面的泊松关系。

### 3. 第二定律与熵

热机效率：

$$
\eta=\frac{W}{Q_H}=1-\frac{Q_C}{Q_H}.
$$

这里 $Q_H,Q_C$ 分别取吸热量和放热量的正值大小。工作在两恒温热源之间的卡诺热机：

$$
\eta_C=1-\frac{T_C}{T_H}.
$$

两端温度必须用绝对温度。相同两热源间实际热机的效率不超过这个值。

熵是状态函数：

$$
dS=\frac{\delta Q_{\mathrm{rev}}}{T}.
$$

不可逆过程也可通过连接相同初末态的假想可逆路径计算熵变。热容为常量的理想气体：

$$
\Delta S=\nu C_{V,m}\ln\frac{T_2}{T_1}+\nu R\ln\frac{V_2}{V_1}.
$$

孤立系统熵不减少；一般系统可以因向外放热而熵减少，因此判断第二定律时要看系统加环境的总熵变。

## 六、静电场与电势

### 1. 电场、叠加与高斯定律

真空中点电荷的电场：

$$
\boldsymbol E=\frac{1}{4\pi\varepsilon_0}\frac{q}{r^2}\hat{\boldsymbol r},
\qquad\boldsymbol F=q_0\boldsymbol E.
$$

多个电荷的场按矢量相加。连续电荷分布用 $dq=\lambda d\ell$、$\sigma dS$ 或 $\rho dV$ 建立积分。

$$
\oint_S\boldsymbol E\cdot d\boldsymbol S=\frac{Q_{\text{内}}}{\varepsilon_0}.
$$

高斯定律始终适用于静电场，但只有球对称、柱对称、平面对称等足够强的对称性，才容易直接从通量求出场强。

真空中常见结果：

- 无限长均匀直线电荷：$E=\lambda/(2\pi\varepsilon_0r)$，符号和方向按电荷性质判断。
- 无限大均匀带电平面：场强大小 $E=|\sigma|/(2\varepsilon_0)$。
- 两块无限大、等量异号平行带电板之间：场强大小 $E=|\sigma|/\varepsilon_0$，外部场相消。

闭合面外的电荷对总通量净贡献为零，但仍会影响面上各点的电场。

### 2. 电势与电势能

$$
V_B-V_A=-\int_A^B\boldsymbol E\cdot d\boldsymbol\ell,
\qquad\boldsymbol E=-\nabla V.
$$

电势是标量，叠加比电场简单。点电荷在以无穷远为零点时：$V=q/(4\pi\varepsilon_0r)$。电荷的势能为 $U=qV$，其中 $V$ 应取其他电荷产生的外电势。

静电平衡导体内部电场为零，导体为等势体，多余自由电荷分布在表面。空腔中若存在电荷，不能据“导体内部场为零”推断空腔内也处处为零。

### 3. 电容与电场能

$$
C=\frac{Q}{\Delta V},\qquad
U=\frac12C(\Delta V)^2=\frac{Q^2}{2C}=\frac12Q\Delta V.
$$

忽略边缘效应、介质线性均匀的平行板电容器：$C=\varepsilon A/d$。

电容串联：$1/C_{\mathrm{eq}}=\sum1/C_i$；并联：$C_{\mathrm{eq}}=\sum C_i$。

改变板间距或插入介质前，要先看电容器是否仍接电源：接理想恒压源时电压不变；隔离且无漏电时电荷量不变。两个条件对应的能量变化不同。

真空中的静电场能量密度：$u_E=\frac12\varepsilon_0E^2$。

## 七、恒定电流、磁场与电磁感应

### 1. 电流与电路

$$
I=\frac{dq}{dt},\qquad \boldsymbol J=\sigma\boldsymbol E.
$$

均匀导体的电阻 $R=\rho_eL/A$，其中 $\rho_e$ 是电阻率，$\sigma=1/\rho_e$ 是电导率。欧姆定律要求材料和工作条件处在线性范围。

集总直流电路中，节点电流守恒，闭合回路各电势变化的代数和为零。电容充电的 RC 时间常数：$\tau=RC$。

初始未充电电容经电阻接恒压源 $V_0$：

$$
q(t)=CV_0(1-e^{-t/RC}),\qquad I(t)=\frac{V_0}{R}e^{-t/RC}.
$$

### 2. 磁场与磁力

$$
\boldsymbol F=q(\boldsymbol E+\boldsymbol v\times\boldsymbol B).
$$

磁力与速度垂直，因此单独的磁场不改变粒子的动能。带电粒子在匀强磁场中垂直入射、忽略相对论效应时：

$$
r=\frac{mv}{|q|B},\qquad T=\frac{2\pi m}{|q|B}.
$$

若有沿磁场的速度分量，运动轨迹为螺旋线。判断转向时别忘了负电荷受力方向与右手叉乘结果相反。

电流元产生的磁场：

$$
d\boldsymbol B=\frac{\mu_0}{4\pi}\frac{I\,d\boldsymbol\ell\times\hat{\boldsymbol r}}{r^2}.
$$

无限长直导线外 $B=\mu_0I/(2\pi r)$；理想长螺线管内部 $B=\mu_0nI$，$n$ 为单位长度匝数。

稳恒电流的安培环路定律：

$$
\oint\boldsymbol B\cdot d\boldsymbol\ell=\mu_0I_{\text{穿过}}.
$$

穿过电流按环路方向对应的右手法向取代数和。和高斯定律一样，能否方便求场取决于对称性。

### 3. 感应电动势与自感

$$
\Phi_B=\int_S\boldsymbol B\cdot d\boldsymbol S,\qquad
\mathcal E=-N\frac{d\Phi_B}{dt}.
$$

上式中的 $\Phi_B$ 是每匝相同的磁通量；若每匝磁通不同，应对磁链求导。负号对应楞次定律：感应效应反抗磁通的变化。

不要把它记成“感应磁场总与原磁场反向”。若原磁通在减小，感应磁场可能与原场同向。

直导体棒以速度 $v$ 在匀强磁场中运动，且棒、速度、磁场两两垂直时，动生电动势大小为 $B\ell v$。一般运动回路可从 $\oint(\boldsymbol E+\boldsymbol v\times\boldsymbol B)\cdot d\boldsymbol\ell$ 出发。

自感电动势和储能：

$$
\mathcal E_L=-L\frac{dI}{dt},\qquad U_L=\frac12LI^2.
$$

RL 电路的时间常数为 $L/R$。理想电容的电压、理想电感的电流在有限电流或有限电压激励下不能突变。

### 4. 麦克斯韦方程组与电磁波

真空中的积分形式：

$$
\oiint\boldsymbol E\cdot d\boldsymbol S=\frac{Q_{\mathrm{内}}}{\varepsilon_0},
\qquad\oiint\boldsymbol B\cdot d\boldsymbol S=0,
$$

$$
\oint\boldsymbol E\cdot d\boldsymbol\ell=-\frac{d\Phi_B}{dt},
$$

$$
\oint\boldsymbol B\cdot d\boldsymbol\ell
=\mu_0I_{\mathrm{内}}+\mu_0\varepsilon_0\frac{d\Phi_E}{dt}.
$$

这里环路和曲面取固定几何边界，并按右手规则配合方向。位移电流项使时变电场也能产生环绕磁场。

真空电磁波速：

$$
c=\frac1{\sqrt{\mu_0\varepsilon_0}}.
$$

真空平面电磁波中 $\boldsymbol E$、$\boldsymbol B$ 与传播方向相互垂直，且 $E=cB$。能流密度由坡印廷矢量给出：$\boldsymbol S=\boldsymbol E\times\boldsymbol B/\mu_0$。

## 八、波动光学

### 1. 干涉

光程为 $\int n\,ds$；均匀介质中为 $n\ell$。比较相位时用光程差，并计入反射等产生的附加相位。

双缝间距 $d$、屏距 $D$，在远场和小角度近似下，若介质内波长为 $\lambda$：

$$
\Delta x=\frac{\lambda D}{d}.
$$

等初相位双缝的明纹条件为 $d\sin\theta=m\lambda$。例如 $\lambda=600\,\mathrm{nm}$、$D=2.0\,\mathrm m$、$d=0.50\,\mathrm{mm}$，条纹间距为 $2.4\,\mathrm{mm}$。

薄膜干涉题分三步：画出参与叠加的两束光，算光程差，再检查两次反射的相位变化。常见非吸收介质中，从低折射率侧射向高折射率侧的反射会产生 $\pi$ 相位跃变，但不能忽略另一束光的反射情况。

### 2. 衍射与光栅

单缝夫琅禾费衍射，缝宽 $a$，暗纹条件：

$$
a\sin\theta=m\lambda,\qquad m=\pm1,\pm2,\ldots
$$

中央主极大在小角度平面屏上的宽度约为 $2\lambda D/a$，是中心两侧第一暗纹之间的距离。

正入射光栅主极大条件：

$$
d\sin\theta=m\lambda.
$$

这里 $d$ 是相邻缝中心间距，不是单条缝宽。级次受 $|\sin\theta|\le1$ 限制；某个主极大与单缝暗纹重合时会出现缺级。

圆孔衍射的瑞利分辨角近似为 $\theta_{\min}=1.22\lambda/D_{\mathrm{孔}}$。孔径越大，理想衍射极限下能分辨的角间隔越小。

### 3. 偏振

理想线偏振光通过检偏器：

$$
I=I_0\cos^2\theta.
$$

$\theta$ 是入射偏振方向与检偏器透振方向的夹角。自然光先通过理想起偏器后，强度变为原来的一半；再通过检偏器才按马吕斯定律计算。

从介质 $n_1$ 入射到 $n_2$，布儒斯特角满足 $\tan\theta_B=n_2/n_1$。在该角度，反射光与折射光互相垂直。

## 九、近代物理基础

### 1. 狭义相对论

$$
\gamma=\frac1{\sqrt{1-v^2/c^2}},\qquad
\Delta t=\gamma\Delta\tau,\qquad L=\frac{L_0}{\gamma}.
$$

固有时 $\Delta\tau$ 是两个事件在同一位置发生的参考系中测得的时间间隔。长度收缩只发生在相对运动方向，测运动物体长度时必须在测量者参考系中同时记录两端位置。

$$
E=\gamma mc^2,\quad E_0=mc^2,\quad
\boldsymbol p=\gamma m\boldsymbol v,
$$

$$
E^2=p^2c^2+m^2c^4.
$$

这里 $m$ 表示不变质量。低速展开得到动能 $E-E_0\approx\frac12mv^2$。

### 2. 光子与物质波

$$
E_\gamma=h\nu,\qquad p_\gamma=\frac h\lambda.
$$

光电效应：

$$
K_{\max}=h\nu-W_0.
$$

存在截止频率 $\nu_0=W_0/h$。频率低于阈值时，在单光子光电效应模型下，增大光强也不能使电子逸出；高于阈值后，增大光强主要增加光电子数，而最大动能由频率决定。

德布罗意波长：$\lambda=h/p$。非相对论粒子经电势差 $U$ 从静止加速时，可用 $p=\sqrt{2m|q|U}$；高能时需改用相对论关系。

### 3. 波函数与能级

波函数 $\psi$ 本身一般是复数，$|\psi|^2$ 表示位置概率密度，归一化条件为

$$
\int|\psi|^2dV=1.
$$

一维定态薛定谔方程：

$$
-\frac{\hbar^2}{2m}\frac{d^2\psi}{dx^2}+V(x)\psi=E\psi.
$$

宽度为 $L$ 的一维无限深势阱，区间 $0<x<L$：

$$
\psi_n=\sqrt{\frac2L}\sin\frac{n\pi x}{L},\qquad
E_n=\frac{n^2\pi^2\hbar^2}{2mL^2},\quad n=1,2,\ldots
$$

量子数不能取零，否则得到的是处处为零、无法归一化的波函数。能级间跃迁对应光子的频率满足 $h\nu=|E_i-E_f|$。

不确定关系：

$$
\Delta x\,\Delta p_x\ge\frac\hbar2.
$$

这里的不确定度是量子态中观测量的标准差，不只是仪器不够精确导致的读数误差。

## 十、交卷前的检查

- 力学：对象、参考系、正方向是否统一？守恒定律的条件是否成立？
- 热学：吸热和做功的正负约定是否前后一致？摄氏温度有没有转成开尔文？
- 电磁学：矢量方向、负电荷符号、面积法向和环路方向是否对应？
- 光学：用的是几何路程还是光程？波长属于真空还是介质？
- 数值：$\mathrm{nm}$、$\mathrm{mm}$、$\mu\mathrm F$ 等单位是否换算？结果量纲是否正确？
- 极限情况：摩擦趋于零、质量相等、距离增大等情况下，结果是否符合直觉？
